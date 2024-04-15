<?php

require_once "autoloader.php";

class Importar {

    private $conexion;
    private $conn;

    function __construct(){
        $this->conexion = new Connection();
        $this->conn = $this->conexion->getConn();
    }

    function customers() {
        $gestor = fopen('customer.csv', "r");
        while (($element = fgetcsv($gestor, 0, "#")) !== false) {
            $id = $element[0];
            $name = $element[1];
            $query = "UPDATE `customers` SET `customerName`='$name' WHERE `customerID`= '$id'";
            $this->conn->query($query);
        }
        fclose($gestor);
    }

    function brandCostumers() {
        $gestor = fopen('customer.csv', "r");
        while (($element = fgetcsv($gestor, 0, "#")) !== false) {
            $id = $element[0];
            $brands = explode(", ", $element[2]);
            for ($i=0; $i < count($brands); $i++) { 
                $idBrands = $this->getBrandId($brands[$i]);
                $stmt = $this->conn->prepare("INSERT INTO brandCustomer(customerId, brandId) VALUES (?, ?)");
                $stmt->bind_param("ss", $id, $idBrands);
                $stmt->execute();
            }
        }
        fclose($gestor);
    }

    function getBrandId($name) {
        $query = "SELECT brandId FROM `brands` WHERE brandName='$name'";
        $result = $this->conn->query($query);  
        return $result;
    }
}

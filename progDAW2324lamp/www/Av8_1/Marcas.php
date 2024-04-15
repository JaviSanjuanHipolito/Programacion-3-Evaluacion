<?php

require_once "autoloader.php"; 

class Gestion {

    private $conexion;
    private $conn;

    function __construct(){
        $this->conexion = new Connection();
        $this->conn = $this->conexion->getConn();
    }

    public function getBrands() {
        $query = "SELECT brandName FROM brands ORDER BY brandName ASC";
        $result = $this->conn->query($query);
        print_r($result);
    }
}

$importar = new Importar();
$importar->customers();
$importar->brandCostumers();

$gestion = new Gestion();
$gestion->getBrands();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
    <input type='checkbox' value='33' name='Acura'> Acura<br><input type='checkbox' value='17' name='Audi'> Audi<br><input type='checkbox' value='23' name='BMW'> BMW<br><input type='checkbox' value='35' name='Buick'> Buick<br><input type='checkbox' value='9' name='Cadillac'> Cadillac<br><input type='checkbox' value='11' name='Citroën'> Citroën<br><input type='checkbox' value='26' name='Chevrolet'> Chevrolet<br><input type='checkbox' value='10' name='Dacia'> Dacia<br><input type='checkbox' value='13' name='Daihatsu'> Daihatsu<br><input type='checkbox' value='2' name='Daimler'> Daimler<br><input type='checkbox' value='16' name='Dodge'> Dodge<br><input type='checkbox' value='19' name='Dongfeng Motor'> Dongfeng Motor<br><input type='checkbox' value='21' name='FAW'> FAW<br><input type='checkbox' value='5' name='Ford'> Ford<br><input type='checkbox' value='8' name='General Motors'> General Motors<br><input type='checkbox' value='20' name='Honda'> Honda<br><input type='checkbox' value='12' name='Infiniti'> Infiniti<br><input type='checkbox' value='24' name='Isuzu'> Isuzu<br><input type='checkbox' value='1' name='JLR'> JLR<br><input type='checkbox' value='22' name='Lexus'> Lexus<br><input type='checkbox' value='27' name='Lincoln'> Lincoln<br><input type='checkbox' value='29' name='Maruti Suzuki'> Maruti Suzuki<br><input type='checkbox' value='31' name='Mercedes-Benz'> Mercedes-Benz<br><input type='checkbox' value='15' name='MINI'> MINI<br><input type='checkbox' value='25' name='Mitsubishi Motors'> Mitsubishi Motors<br><input type='checkbox' value='4' name='Porsche'> Porsche<br><input type='checkbox' value='7' name='Renault'> Renault<br><input type='checkbox' value='18' name='Seat'> Seat<br><input type='checkbox' value='32' name='Skoda'> Skoda<br><input type='checkbox' value='6' name='Smart'> Smart<br><input type='checkbox' value='28' name='Subaru'> Subaru<br><input type='checkbox' value='34' name='Suzuki'> Suzuki<br><input type='checkbox' value='30' name='Toyota'> Toyota<br><input type='checkbox' value='14' name='Vauxhall'> Vauxhall<br><input type='checkbox' value='36' name='Volkswagen'> Volkswagen<br><input type='checkbox' value='3' name='Volvo'> Volvo<br><br>
    <input type="submit" value="Seleccionar">
    </form>
</body>
</html>


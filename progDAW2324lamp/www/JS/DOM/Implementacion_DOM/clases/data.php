<?php

class data {
    private $file = "data.csv";
    private $data=[];

    public function __construct() {
		$this->readFile();
       
    }

    function readFile() { 
        $fp = fopen($this->file, "r");
        $contador = 0;
        while (($datos = fgetcsv($fp)) !== false) {
            $dato = [$datos[0], $datos[1], $datos[2], $datos[3], $datos[4]];
            array_push($this->data, $dato);
            $contador += 1;
        }
        fclose($fp);
    }

    function getData(){ 
        return $this->data;
    }

    function modifyVisit($datos){
        $this->entyFile(); 
        $this->writeFile($datos);
        header('Location: index.php');
    }

    function writeFile($datos) {
        $fp = fopen($this->file, "w");
        foreach ($datos as $fila) {
            fputcsv($fp, array_values($fila));
        }
        fclose($fp);
    }

    function entyFile(){
        $fp = fopen($this->file, "r"); 
        while (($line = fgets($fp)) !== false) { 
            $line = trim(preg_replace('/\s+/', ' ', $line)); 
            if ( $line == "") continue;
        }
        fclose($fp);
    }
}
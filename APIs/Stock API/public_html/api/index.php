<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');

if (is_numeric($_GET["Person"]) and (isset($_GET["Person"]))) {
    
    $thePerson = htmlspecialchars($_GET["Person"], ENT_QUOTES, 'UTF-8');
    
       $servername = "";
   $username = "";
   $password = "";
   $dbname = "";
   
   $conn = new mysqli($servername,$username,$password,$dbname);
     
   
    if ($conn -> connect_errno)
    {
       echo htmlspecialchars("Failed to connect to MySQL: " . $conn -> connect_error);
       exit();
    }

    
    $sql = 'SELECT * FROM HappyStockTable WHERE Person = ?';
    

    $prepsql= $conn->prepare($sql);
    $prepsql ->bind_param("i",$thePerson);
    

     $prepsql ->execute();
    
    $result = $prepsql->get_result();

    
    $row = []; 
    
     if ($result->num_rows > 0) 
     {
        
        $row = $result->fetch_all(MYSQLI_NUM);  

    }   


foreach ($row as &$subarray) {
    foreach ($subarray as &$value) {
        $value = htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
    }
}
echo json_encode($row);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////





?>




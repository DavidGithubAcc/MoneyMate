<?php


header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');


if (is_numeric($_GET["Person"]) and (isset($_GET["Person"])) and ($_GET["Request"] == "transactions")) {
    
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

    
    $sql = 'SELECT User, Dateof, TimeOf, CompanyName,Value FROM HappyHoldings WHERE User = ?';
    

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

if (is_numeric($_GET["Person"]) and (isset($_GET["Person"])) and ($_GET["Request"] == "balence")) {
    
     $thePerson2 = htmlspecialchars($_GET["Person"], ENT_QUOTES, 'UTF-8');

     $servername2 = "";
   $username2 = "";
   $password2 = "";
   $dbname2 = "";
   $conn2 = new mysqli($servername2,$username2,$password2,$dbname2);
    if ($conn2 -> connect_errno)
    {
       echo htmlspecialchars("Failed to connect to MySQL: " . $conn2 -> connect_error);
       exit();
    }
    $sql2 = 'SELECT * FROM HappyBalences WHERE Person = ?';
    $prepsql2= $conn2->prepare($sql2);
    $prepsql2 ->bind_param("i",$thePerson2);
     $prepsql2 ->execute();
    $result2 = $prepsql2->get_result();
    $row2 = []; 
     if ($result2->num_rows > 0) 
     {
        $row2 = $result2->fetch_all(MYSQLI_NUM);  
    }   
echo json_encode($row2);
}

if (is_numeric($_GET["Person"]) and (isset($_GET["Person"])) and ($_GET["Request"] == "interest")) {
    

echo json_encode([1.5]);
}



?>




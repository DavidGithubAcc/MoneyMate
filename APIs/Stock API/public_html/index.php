<?php

if ( is_numeric($_GET["Person"]) and (isset($_GET["Person"])) ) {
    
    
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


}


?>




<!DOCTYPE html>

<script type="text/javascript">
var x = <?php echo json_encode($row); ?>;
var t = <?php echo json_encode($thePerson); ?>;

        </script>


<html>
  <head>
    <title>Happy Stocks</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <h1>Happy Stocks</h1>
    <form action="" method="get">
      <label for="Person">Person:</label>
      <input type="number" id="Person" name="Person" required><br>

      
      <input type="submit" value="Submit"> <br>
    </form>
    

    
    <br>
    
    
    <script src="homepage.js"></script>
    
    
    
  </body>
</html>
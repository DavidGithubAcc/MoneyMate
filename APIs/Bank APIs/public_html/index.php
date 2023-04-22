<?php

if ( is_numeric($_GET["Person"]) and (isset($_GET["Person"])) ) {
    
    
    $thePerson = htmlspecialchars($_GET["Person"], ENT_QUOTES, 'UTF-8');

     $servername = "localhost";
   $username = "";
   $password = "";
   $dbname = "";
   $conn = new mysqli($servername,$username,$password,$dbname);
    if ($conn -> connect_errno)
    {
       echo htmlspecialchars("Failed to connect to MySQL: " . $conn -> connect_error);
       exit();
    }
    $sql = 'SELECT * FROM HappyHoldings WHERE User = ?';
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

////////////////////////////////////////////////////////////////
  
 
    $thePerson2 = htmlspecialchars($_GET["Person"], ENT_QUOTES, 'UTF-8');

     $servername2 = "localhost";
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




/////////////////////////////////////////////////////////////////

$Interest = 1.5;
}


?>




<!DOCTYPE html>

<script type="text/javascript">
var x = <?php echo json_encode($row); ?>;
var y = <?php echo json_encode($row2); ?>;
var z = <?php echo json_encode($Interest); ?>;
var t = <?php echo json_encode($thePerson); ?>;

        </script>


<html>
  <head>
    <title>Happy Holdings</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <h1>Happy Holdings</h1>
    <form action="" method="get">
      <label for="Person">Person:</label>
      <input type="number" id="Person" name="Person" required><br>

      
      <input type="submit" value="Submit"> <br>
    </form>
    
    <label id="balence">Balence:</label> <br>
    <label id="interest">Interest:</label>
    
    <br>
    
    
    <script src="homepage.js"></script>
    
    
    
  </body>
</html>
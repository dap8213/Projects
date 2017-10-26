
<?php
    include 'connectingDataBase.php';
    
    
    if($conn)
    {
      echo "Database is connected" . "<br>";
    }

    else{
      die("database is not connected" . "<br>");
    }
    
    $query = "SELECT * FROM users";
    
    //Actually connecting to the query
    $result = mysqli_query($conn , $query);
    
    if(!$result) {
        die('Query FAILED');
    }

?>


<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
  <script src="https://jspm.io/system.js"></script>
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <title>PHP Practice</title>

</head>

<body>
<div class="container">


    <div class="col-sm-6">
     
    <?php
        
    while($row = mysqli_fetch_assoc($result)) {
        print_r($row);
    }
        
    ?>
    </div>

    </div>

</body>
</html>

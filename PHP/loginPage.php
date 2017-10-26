
<?php
if(isset($_POST['submit']))
{
    $username = $_POST['username'];
    $password = $_POST['password'];
    echo "Yes it works!" . "<br>";

    include 'connectingDataBase.php';
    
    
    if($conn)
    {
      echo "Database is connected" . "<br>";
    }

    else{
      die("database is not connected" . "<br>");
    }
    
    $query = "INSERT INTO users(username,password) VALUES('$username','$password')";
    
    //Actually connecting to the query
    $result = mysqli_query($conn , $query);
    
    if(!$result) {
        die('Query FAILED');
    }
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
        <form action="loginPage.php" method="post">
            <div class="form-group">
            <label for="username">Username</label>
            <input type="text" name="username" class="form-control">
            </div>

            <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" class="form-control">
            <br>
            <input class="btn btn-primary" type="submit" name="submit" value="Submit">
            </div>




        </form>

    </div>

    </div>

</body>
</html>

<?php

if (isset($_POST['submit'])){

    include 'dbh.inc.php';

    $uid = mysqli_real_escape_string($conn,$_POST['uid']);
    $pwd = mysqli_real_escape_string($conn, $_POST['pwd']);

    //Error handlers
    //Check if inputs are empty
    if (empty($uid) || empty($pwd)){
      header("Location:../Traveling.php?login=empty");
      exit();
    } else {
      $sql = "SELECT * FROM users WHERE user_uid='$uid'";
      $result = mysqli_query($conn, $sql);
      $resultCheck = mysqli_num_rows($result);
      if ($resultCheck < 1){
        header("Location:../Traveling.php?login=error");
        exit();
      }
    }
}

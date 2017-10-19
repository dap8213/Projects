<?php
  session_start();

 ?>

<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Traveling.com</title>
        <script
        src="http://code.jquery.com/jquery-3.2.1.js"
        integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
        crossorigin="anonymous"></script>
        <script src="myScript1.js"></script>
        <link rel="stylesheet" type="text/css" href="Canvas.css">
    </head>
    <body>
      <?php
        if (isset($_SESSION['u_id'])){
          echo '<div id="button2">
                <form action="includes/logout.inc.php" method="POST">
                <button type="submit" name="submit">Logout</button></form>
                </div>';
        }else {
          echo '<div id="frm">
              <form action="includes/login.inc.php" method="POST">
              <label>Login</label>
              <br>
              <input type="username" name="uid" placeholder="Enter User Name/Email">

              <input type="password" name="pwd" placeholder="Enter Password">
              <br>
              <div id="sub">
              <input type="submit" name="submit">
              </div>
              </form>
              </div>';

        }
        ?>

        <h1><i>Welcome to Traveling.com</i></h1>

        <img src="Colombia.jpg" alt="Mountain View" style="width:304px;height:228px;" id="images">

        </div>
        <ul class="main-nav">
          <li><a href="Traveling.php">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Special Deals</a></li>
          <li><a href="Subscribe.php">Subscribe</a></li>
        </ul>

    </body>
</html>

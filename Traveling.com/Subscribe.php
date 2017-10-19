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
        <link rel="stylesheet" type="text/css" href="Canvas2.css">
    </head>
    <body>
        <h1><i>Subscribe Today!</i></h1>

        <ul class="main-nav">
          <li><a href="Traveling.php">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Special Deals</a></li>
          <li><a href="Subscribe.php">Subscribe</a></li>
        </ul>
        <form class="signup-form" action="includes/signup.inc.php" method="POST">

          <input type="text" name="first" placeholder="Firstname">
          <br>
          <input type="text" name="last" placeholder="Lastname">
          <br>
          <input type="username" name="email" placeholder="E-mail">
          <br>
          <input type="username" name="uid" placeholder="Username">
          <br>
          <input type="password" name="pwd" placeholder="Password">
          <br>
          <input type="submit" name="submit">

</form>

    </body>
</html>

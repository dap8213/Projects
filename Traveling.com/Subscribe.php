<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Traveling.com</title>
        <script
        src="http://code.jquery.com/jquery-3.2.1.js"
        integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
        crossorigin="anonymous"></script>
        <script src="myScript.js"></script>
        <link rel="stylesheet" type="text/css" href="Canvas2.css">
    </head>
    <body>
        <h1><i>Subscribe Today!</i></h1>

        <ul class="main-nav">
          <li><a href="Traveling.html">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Special Deals</a></li>
          <li><a href="Subscribe.php">Subscribe</a></li>
        </ul>
        <form action="Extended.php" method="post">

          <input type="text" name="first_name" placeholder="First Name">
          <br>
          <input type="text" name="last_name" placeholder="Last Name">
          <br>
          <input type="text" name="phone_number" placeholder="Home Phone Number">
          <br>
          <input type="text" name="street_address" placeholder="Street Address">
          <br>
          <input type="text" name="state" placeholder="State">
          <br>
          <input type="text" name="zip_code" placeholder="Zip Code">
          <br>
          <input type="password" name="password" placeholder="Enter Password">
          <br>
          <input type="submit" name="submit">

</form>

    </body>
</html>

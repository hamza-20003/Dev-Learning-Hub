<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    echo "Hello " . $name;
}
?>

<form method="POST">
  <input type="text" name="name">
  <button type="submit">Send</button>
</form>
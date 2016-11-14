<?php
$obj = $_GET['obj'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "game_dev";
$conn = new mysqli($servername, $username, $password,$dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$json = json_decode($obj, true);
$nume= $json['nume'];
$parola=$json['parola'];
$sql="SELECT id FROM users WHERE NumeCont='".$nume."' and Parola='".$parola."'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result)>0){
  while($row = mysqli_fetch_assoc($result)) {
        echo $row["id"] ;
    }
}else echo "ceva a mers foarte prost";

?>

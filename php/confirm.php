<?php
require 'conn.php';
$id = $_POST['id'];
$sql = "DELETE FROM `office` WHERE `uid` = '$id'";
$result = $conn->query($sql);
if ($result) echo 1;
else echo 0;
$conn->close();

<?php
require 'conn.php';
$id = $_POST['id'];
$status = $_POST['status'] == "true" ? "批准" : "驳回";
$sql = "UPDATE `office` SET `status` = '$status' WHERE `uid` = '$id'";
$result = $conn->query($sql);
if ($result) echo 1;
else echo 0;
$conn->close();

<?php
require 'conn.php';
$depart = $_POST["depart"];
$person = $_POST["person"];
$date = $_POST["date"];
$start = $_POST["start"];
$end = $_POST["end"];
$qq = $_POST["qq"];
$house = $_POST["house"];

$sql = "SELECT `date`, `start`, `end` FROM `office`
        WHERE `date` = '$date' AND `house` = '$house'
        AND !((`start` >= '$end')
        OR (`end` <= '$start'))";
$id = $house . ":" . date("c");
$result = $conn->query($sql);
if ($result) {
    if ($result->fetch_assoc()) echo -1;
    else {
        $insert = "INSERT INTO `office` (`depart`, `person`, `date`, `start`, `end`, `qq`, `house`, `uid`)
                    VALUES ('$depart', '$person', '$date', '$start', '$end', '$qq', '$house', '$id')";
        $result = $conn->query($insert);
        if ($result) echo $id;
        else echo 0;
    }
} else echo 0;
$conn->close();

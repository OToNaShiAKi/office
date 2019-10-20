<?php
require 'conn.php';
$sql = "SELECT * FROM `office` ORDER BY `date` DESC, `start` DESC, `end` DESC";
$result = $conn->query($sql);
$json = array(
    "informations" => array(
        "fe" => array(),
        "fw" => array(),
        "se" => array(),
        "sw" => array(),
    ),
    "status" => 0
);
if ($result) {
    $json["status"] = 1;
    while ($row = $result->fetch_assoc()) {
        $date = explode('-', $row['date']);
        $time = $date[1] . "-" . $date[2] . " " . $row['start'] . "-" . $row['end'];
        array_push($json['informations'][$row['house']], array(
            "depart" => $row['depart'],
            "person" => $row['person'],
            "time" => $time,
            "qq" => $row['qq'],
            "status" => $row['status'],
            "id" => $row['uid']
        ));
    }
}
echo json_encode($json);
$conn->close();

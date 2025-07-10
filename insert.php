<?php
include 'db.php';

$name = $_POST['name'];
$age = $_POST['age'];

$sql = "INSERT INTO users (name, age) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("si", $name, $age);
$stmt->execute();

echo "success";
?>

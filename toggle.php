<?php
include 'db.php';

$id = $_POST['id'];

$result = $conn->query("SELECT status FROM users WHERE id=$id");
$row = $result->fetch_assoc();
$newStatus = $row['status'] == 0 ? 1 : 0;

$conn->query("UPDATE users SET status=$newStatus WHERE id=$id");

echo "success";
?>

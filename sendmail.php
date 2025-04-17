<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "shivanirapure2003@gmail.com"; // replace with your email
    $subject = "New Contact Form Submission";

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subjectField = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $body = "
    Name: $name\n
    Email: $email\n
    Phone: $phone\n
    Subject: $subjectField\n
    Message:\n$message
    ";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
}
?>

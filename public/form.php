<?php
error_reporting(E_ALL);


// NAME
$name = $_POST["name"];
// PHONE
$phone = $_POST["phone"];
// EMAIL
$email = $_POST["email"];
// PHONE
$message = $_POST["message"];

$EmailTo = "office@thecoderdev.com";
$Subject = "Site form";

// prepare email body text
$Body = "";
$Body .= "Full name: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";

$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success){
	header('Location: /index.html');
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}
?>
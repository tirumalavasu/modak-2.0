<?php
	$thankyou_page = 'thankyou.html';
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$email_address = $_POST['customer_email'];
	$company_name = $_POST['company_name'];
	$phone_number = $_POST['phone_number'];
	$designation = $_POST['designation'];
	$to = "sales@modakanalytics.com";
	$subject = "Request demo";
	$headers = "From: " . $first_name . $last_name ;
	$msg =	"Name: " . $first_name  . " " . $last_name . "\r\n" .
					"Email: " . $email_address . "\r\n" .
					"Company: "  . $company_name . "\r\n" .
					"Designation: "  . $designation . "\r\n" .
					"Phone: " . $phone_number ;
	mail($to, $subject, $msg, $headers);
	header( "Location: $thankyou_page" );
?>
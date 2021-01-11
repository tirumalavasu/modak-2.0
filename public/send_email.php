<?php
    if(empty($_POST['g-recaptcha-response'])) {
        $errMsg = 'Please check the robot checkbox.';
    } else if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response']))
      {
            $secret = '6LcOi9UUAAAAAJYY2iDeKnBfd4KqmohD-oeWUKjz';
            $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
            $responseData = json_decode($verifyResponse);
            if($responseData->success)
            {
                $succMsg = 'Your contact request have submitted successfully.';
                $thankyou_page = 'thankyou.html';
            	$first_name = $_POST['first_name'];
            	$last_name = $_POST['last_name'];
            	$email_address = $_POST['customer_email'];
            	$subject = $_POST['subject'];
            	$existingclient = $_POST['is_existing_customer'];
            	$customer_message = $_POST['customer_message'];
            	$to = "sales@modak.com";
            	$headers = "From: " . $first_name . $last_name ;
            	$msg =	"Subject: "  . $subject . "\r\n" .
            					"Name: " . $first_name  . " " . $last_name . "\r\n" .
            					"Email: " . $email_address . "\r\n" .
            					"Existing client: "  . $existingclient . "\r\n" .
            					"Message: " . $customer_message ;
            	mail($to, $subject, $msg, $headers);
            	header( "Location: $thankyou_page" );
            }
            else
            {
                $errMsg = 'Robot verification failed, please try again.';
            }
      }
	
?>
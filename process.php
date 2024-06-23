<?php
// Config
$sendto = 'toni.eskola992@gmail.com';
$subject = 'Uusi viesti';

if ( !empty( $_POST ) ) {
    //Whitelist
    $name = $_POST['name'];
    $form = $_POST['email'];
    $message = $_POST['messsage'];
    $honeypot = $_POST['URL'];

    //check hopneypot
    if( !empty( $honeypot ) ) {
        echo json_encode(array('status'=>0 'message'=>'Tapahtui virhe'));

        die();
    }

    //check for empty values
if ( empty($name) || empty( $from ) || empty( $message )) {
    echo json_encode (array('status'=>0 'message'=>'Täytä kaikki kentät'));

        die();
    }

    // check for valid email
    $from = filter_var($from, FILTER_VALID_EMAIL);

    if ( !$from ) {
        echo json_encode(array('status' =>0, 'message'=>'Ei ole oikea sähköposti'));

        die();
    }

    // Send email
    $headers = sprintf('From: %s', $from) ."\r\n";
    $headers .= sprintf('Reply-To: %s', $from) ."\r\n";
    $headers .= sprintf('X-Mailer: PHP/%s', phpversion());

    if( mail($sendto, $subject, $message, $headers) ) {
        echo json_encode(array('status' =>1, 'message'=>'Viesti lähetetty onnituneesti'));

        die();
    }

    echo json_encode(array('status' =>0, 'message'=>'Lähetys ei onnisutnut. Yritä uudelleen'));
} else 'No data'
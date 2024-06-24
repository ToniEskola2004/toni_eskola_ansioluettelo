<?php
// Config
$sendto = 'toni.eskola992@gmail.com';
$subject = 'Uusi viesti';

if (!empty($_POST)) {
    // Whitelist
    $name = $_POST['name'];
    $from = $_POST['email'];
    $message = $_POST['message'];
    $honeypot = $_POST['URL'];

    // Check honeypot
    if (!empty($honeypot)) {
        echo json_encode(array('status' => 0, 'message' => 'Tapahtui virhe'));
        die();
    }

    // Check for empty values
    if (empty($name) || empty($from) || empty($message)) {
        echo json_encode(array('status' => 0, 'message' => 'Täytä kaikki kentät'));
        die();
    }

    // Check for valid email
    $from = filter_var($from, FILTER_VALIDATE_EMAIL);
    if (!$from) {
        echo json_encode(array('status' => 0, 'message' => 'Ei ole oikea sähköposti'));
        die();
    }

    // Send email
    $headers = sprintf('From: %s', $from) . "\r\n";
    $headers .= sprintf('Reply-To: %s', $from) . "\r\n";
    $headers .= sprintf('X-Mailer: PHP/%s', phpversion());

    if (mail($sendto, $subject, $message, $headers)) {
        echo json_encode(array('status' => 1, 'message' => 'Viesti lähetetty onnistuneesti'));
        die();
    }

    echo json_encode(array('status' => 0, 'message' => 'Lähetys ei onnistunut. Yritä uudelleen'));
} else {
    echo 'No data';
}
?>

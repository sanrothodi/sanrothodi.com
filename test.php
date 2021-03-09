<?php

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if (empty($name)) {
        $errors[] = "Sorry, I didn't get your name";
    }

    if (empty($email)) {
        $errors[] = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email is invalid';
    }

    if (empty($subject)) {
        $errors[] = 'Subject is empty';
    }

    if (empty($message)) {
        $errors[] = 'Message is empty';
    }


    if (empty($errors)) {
        $toEmail = 'sanro.thodi@gmail.com';
        $emailSubject = "Sanrothodi.com - $subject";
        $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];

        $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Subject: {$subject}", "Message:", $message];
        $body = join(PHP_EOL, $bodyParagraphs);

        if (mail($toEmail, $emailSubject, $body, $headers)) {
            header('Location: thank-you.html');
        } else {
            $errorMessage = 'Oops, something went wrong. Please try again later or contact me on any of my social media';
        }
    } else {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    }
}

?>

<html>
<body>
  <form action="/mail_form.php" method="post" id="contact-form">
    <h2>Contact us</h2>

    <?php echo((!empty($errorMessage)) ? $errorMessage : '') ?>
    <p>
      <label>First Name:</label>
      <input name="name" type="text" value="dima"/>
    </p>
    <p>
      <label>Email Address:</label>
      <input name="email" value="dima@dima.com" type="text"/>
    </p>
    <p>
      <label>Message:</label>
      <textarea name="message">dima</textarea>
    </p>

    <p>
      <input type="submit" value="Send"/>
    </p>
  </form>



  <div class="contact-page">
    <div class="contact-form">

      <h1 class="contact-me">Contact me</h1>

      <form  action="/mail_form.php" method="post" id="contact-form">

        <?php echo((!empty($errorMessage)) ? $errorMessage : '') ?>

          <div class="form-name" for="name">Name<span class="required"></span></div>
          <div><input type="text" name="name" class="field" placeholder="So you are...?"/></div>

          <div class="form-name" for="name">Email <span class="required"></span></div>
          <div><input type="text" name="email" class="field" placeholder="The one you use"/></div>

          <div class="form-name" for="name">Subject <span class="required"></span></div>
          <div><input type="text" name="subject" class="field" placeholder="What's up?"/></div>

          <div class="form-name" for="message">Message <span class="required"></span></div>
          <div class="grow-wrap" ><textarea name="message" class="message-field" id="message" rows="12" cols="100" placeholder="Tell me more"></textarea></div>

        <div class="submit-button-position"><input class="submit-button" type="submit" value="Send"/></div>

      </form>
    </div>
  </div>




















  <script src="https://cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
  <script src="validate.min.js"></script>
  <script>
      const constraints = {
          name: {
              presence: { allowEmpty: false }
          },
          email: {
              presence: { allowEmpty: false },
              email: true
          },
          subject: {
              presence: { allowEmpty: false }
          },
          message: {
              presence: { allowEmpty: false }
          }
      };

      const form = document.getElementById('contact-form');

      form.addEventListener('submit', function (event) {
          const formValues = {
              name: form.elements.name.value,
              email: form.elements.email.value,
              subject: form.elements.subject.value,
              message: form.elements.message.value
          };

          const errors = validate(formValues, constraints);

          if (errors) {
              event.preventDefault();
              const errorMessage = Object
                  .values(errors)
                  .map(function (fieldValues) {
                      return fieldValues.join(', ')
                  })
                  .join("\n");

              alert(errorMessage);
          }
      }, false);
  </script>
</body>
</html>

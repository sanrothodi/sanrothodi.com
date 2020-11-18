<!DOCTYPE html>
<html>
<head>
  <?php
      define ('SITE_KEY', '6LfVjbcZAAAAAOlYspEg8QLQOfaOt5gw71NvJhXh');
      define ('SECRET_KEY', '6LfVjbcZAAAAALUHgelgNQ63oUiiDwB6NuDznRU5');

    if($_POST){
      function getCaptcha($SecretKey){
          $Response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".SECRET_KEY."&response={$SecretKey}");
          $Return = json_decode($Response);
          return $Return;
        }
        $Return = getCaptcha($_POST['g-recaptcha-response']);
        if($Return->success == true && $Return->score > 0.5){
          echo "Success!";
        }else{
          echo "You seem like a bot, bro!";
        }
      }
  ?>
  <meta charset="utf-8" />
  <title>Sanro Thodi - Contact</title>
  <link rel="stylesheet" href="style.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta name="viewport" content="width=1200" />
  <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10" />
  <!--Metatags-->
  <!--OPEN GRAPH-->
  <meta property="og:image" content="" />
  <meta property="og:image:type" content="image/gif" />
  <meta property="og:image:width" content="512" />
  <meta property="og:image:height" content="512" />
  <meta property:"og:image:alt" content="Sanro Thodi" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://sanrothodi.com" />
  <meta property="og:url" content="https://sanrothodi.com" />
  <meta property="og:title" content="Sanro Thodi">
  <meta property="og:description" content="" />
  <meta property="og:site_name" content="Sanro Thodi" />
  <!--FACEBOOK-->
   <meta property="fb:app_id" content="" />
  <!--TWITTER-->
  <meta name=”twitter:card” content=”” />
  <meta name=”twitter:url” content=”” />
  <meta name=”twitter:title” content=”SanroThodi” />
  <meta name=”twitter:description” content=”” />
  <meta name=”twitter:image” content=”” />
  <meta name="twitter:site" content="@sanrothodi" />
  <meta name="twitter:creator" content="@sanrothodi" />
  <!--Scripts-->
  <!--Captcha-->
  <script src="https://www.google.com/recaptcha/api.js?render=<? echo SITE_KEY; ?>"></script>
  <!--Dropdown mobile menu-->
  <script>
  function openNav() {
  document.getElementById("dropdown-menu").style.width = "100%";
  }
  function closeNav() {
  document.getElementById("dropdown-menu").style.width = "0%";
  }
  </script>
</head>

<body>

  <div class="container-contact">

 <!--Main menu overlay-->
   <div id="dropdown-menu" class="dropdown-menu">
     <a href="javascript:void(0)" class="close-button" onclick="closeNav()">&times;</a>
       <div class="main-menu">
         <a href="https://sanrothodi.com/home" class="main-menu-items">Home</a>
         <a href="https://sanrothodi.com/photography" class="main-menu-items">Photography</a>
         <a href="https://sanrothodi.com/videography" class="main-menu-items">Videography</a>
         <a href="https://sanrothodi.com/contact" class="main-menu-items">Contact</a>
       </div>
     </div>

     <!--First row - menu box and social-->
       <div class="main-visual">
       <div class="dropdown-icon" onclick="openNav()">&#9776;</div>
       <div class="desktop-menu">
         <a href="https://sanrothodi.com/home" class="desktop-menu-items">Home</a>
         <a href="https://sanrothodi.com/photography" class="desktop-menu-items">Photography</a>
         <a href="https://sanrothodi.com/videography" class="desktop-menu-items">Videography</a>
         <a href="https://sanrothodi.com/contact" class="desktop-menu-items">Contact</a>
       </div>
       <div></div>

         <div class="social-media">
             <span><a href="https://twitter.com/fullsendsanro"><img src="https://sanrothodi.com/assets/icons/twitter.svg" class="social-media-icons" alt="twitter"/></a></span>
             <span><a href="https://facebook.com/fullsendsanro"><img src="https://sanrothodi.com/assets/icons/facebook.svg" class="social-media-icons" alt="facebook"/></a></span>
             <span><a href="https://instagram.com/fullsendsanro"><img src="https://sanrothodi.com/assets/icons/instagram.svg" class="social-media-icons" alt="instagram"/></a></span>
         </div>
       </div>


</div>




<div class="contact-form">

  <form action="https://sanrothodi.com/contact/" method="post" id="contact-form">

    <div  class="name-sidebyside">
      <div class="form-name" for="name">First Name<span class="required">*</span></div>
      <div class="form-name" for="name">Last Name <span class="required">*</span></div>
      <div><input type="text" name="contact-name" class="name-fields" id="contact-name" /></div>
      <div><input type="text" name="contact-name" class="name-fields" id="contact-lastname" /></div>
    </div>
    <div class="rest-form">
      <div class="form-name" for="name">Email <span class="required">*</span></div>
      <div><input type="text" name="contact-email" class="other-fields" id="contact-email" /></div>
      <div class="form-name" label for="name">Subject <span class="required">*</span></div>
      <div><input type="text" name="contact-website" class="other-fields" id="contact-website" /></div>
      <div class="form-name" for="contact_msg">Message <span class="required">*</span></div>
      <div><textarea name="name" name="contact-msg" class="other-fields-message" id="contact-msg" rows="12" cols="100"></textarea></div>
    </div>
    <div><input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response"/></div>
    <div class="submit-button-position"><button class="g-recaptcha" data-sitekey="<? echo SITE_KEY; ?>" data-callback='onSubmit' data-action='submit'>Send</button></div>
    <script>
         grecaptcha.ready(function() {
           grecaptcha.execute('<? echo SITE_KEY; ?>', {action: 'submit'})
           .then(function(token) {
             document.getElementById('g-recaptcha-response').value=token;
           });
         });
    </script>
  </form>
</div>

<div class="before-footer"></div>

<div class="footer">
  <div class="footer-menu">
    <a href="https://sanrothodi.com/photography" class="footer-menu-items">Photography</a>
    <a href="https://sanrothodi.com/videography" class="footer-menu-items">Videography</a>
    <a href="https://sanrothodi.com/contact" class="footer-menu-items">Contact</a>
  </div>
  <div class="footer-social-media">
      <span><a href="https://twitter.com/fullsendsanro"><img src="https://sanrothodi.com/assets/icons/twitter.svg" class="footer-social-media-icons" alt="twitter"/></a></span>
      <span><a href="https://facebook.com/fullsendsanro"><img src="https://sanrothodi.com/assets/icons/facebook.svg" class="footer-social-media-icons" alt="facebook"/></a></span>
      <span><a href="https://instagram.com/fullsendsanro"><img src="https://sanrothodi.com/assets/icons/instagram.svg" class="footer-social-media-icons" alt="instagram"/></a></span>
  </div>
  <div class="rights"></div>
  <div class="copyright">2020 © Sanro Thodi</div>
</div>
</body>


</html>

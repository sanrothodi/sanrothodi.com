
//Collapsible
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  //Scroll up
    var scrollup = document.getElementById("top");

    function scrollToTop() {
      scrollup.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest"});
    }

  //Grow wrap for textarea
    const growers = document.querySelectorAll(".grow-wrap");

    growers.forEach((grower) => {
      const textarea = grower.querySelector("textarea");
      textarea.addEventListener("input", () => {
        grower.dataset.replicatedValue = textarea.value;
      });
    });


  //Modal
    function openModal() {
      document.getElementById("myModal").style.display = "block";
    }

    function closeModal() {
      document.getElementById("myModal").style.display = "none";
    }

    var modal = document.getElementById("myModal");

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("gallery");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }

    window.onclick = function(close) {
      if (close.target == modal) {
        modal.style.display = "none";
      }
    }


    /*  function TouchFriendly(n) {
        var x = n.touches[0].clientX;
        var y = n.touches[0].clientY;
        var swipe = document.getElementById("swipeModal");
      }
      //Touch Friendly swipe for Modal
        function TouchFriendly() {
          var swipe = document.getElementById("swipeModal");
          swipe.addEventListener("touchstart", handleStart, false);
          swipe.addEventListener("touchend", handleEnd, false);
          swipe.addEventListener("touchmove", handleMove, false);
        }

        document.addEventListener("DOMContentLoaded", TouchFriendly);
      */


  // Stop video playback when not visible in viewport
    let options = {
      root: null,
      rootMargin: '20px',
      threshold:1.0
    };
    let callback = (entries, observer)=>{
      entries.forEach(entry => {
        if(entry.target.id == 'video-01', 'video-02', 'video-03', 'video-04', 'video-05', 'video-06', 'video-07', 'video-08')
        {
          if(entry.isIntersecting){
            entry.target.play();
          }
          else{
            entry.target.pause();
          }
        }
      });
    }

    let observer = new IntersectionObserver(callback, options);
    observer.observe(document.querySelector('#video-01'));
    observer.observe(document.querySelector('#video-02'));
    observer.observe(document.querySelector('#video-03'));
    observer.observe(document.querySelector('#video-04'));
    observer.observe(document.querySelector('#video-05'));
    observer.observe(document.querySelector('#video-06'));
    observer.observe(document.querySelector('#video-07'));
    observer.observe(document.querySelector('#video-08'));


  //Lazyload
    document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });

      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");

      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) {
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }

      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
    })

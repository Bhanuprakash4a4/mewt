<script async="" src="./mewt - modern banking for SMEs of Bharat 🇮🇳_files/gtm.js.download"></script><script>
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-5JWDFDM');
  </script>
  <!-- End Google Tag Manager -->
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async="" src="./mewt - modern banking for SMEs of Bharat 🇮🇳_files/js"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-3D1RB3NYYT');
  </script>
  
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="./mewt - modern banking for SMEs of Bharat 🇮🇳_files/jquery-3.6.0.min.js.download" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script src="./mewt - modern banking for SMEs of Bharat 🇮🇳_files/popper.min.js.download" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
  </script>
  <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
    integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
    crossorigin="anonymous"></script> -->
  <script src="./mewt - modern banking for SMEs of Bharat 🇮🇳_files/bootstrap.bundle.min.js.download" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
  </script>
  <script type="text/javascript">
    function is_touch_enabled() {
      return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
    }

    if (!is_touch_enabled()) {
      const parallax = (e) => {
        var layers = [...$('.layer')]
        layers.forEach((l) => {
          const speed = l.getAttribute('data-speed')
          const x = (window.innerWidth - e.pageX * speed) / 100
          const y = (window.innerHeight - e.pageY * speed) / 100
          l.style.transform = `translateX(${x}px) translateY(${y}px)`
        });
      }
      document.addEventListener('mousemove', parallax)
    }

    function enableFormValidation() {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            event.preventDefault()
            if (!form.checkValidity()) {
              event.stopPropagation()
            } else {
              $.ajax({
                'type': 'POST',
                'url': "https://mewt-finance.herokuapp.com/prospectiveuser",
                'data': JSON.stringify({
                  "phone": $('input[type="tel"]').get(0).value ? $('input[type="tel"]').get(0).value : $(
                    'input[type="tel"]').get(1).value
                }),
                'processData': false,
                'contentType': 'application/json',
                'success': (response) => {
                  console.log(response);
                  $('.needs-validation').each(() => $(this).html('<div class="d-none d-md-block h5">' +
                    response.message + '</div><div class="d-block d-md-none h6">' + response.message +
                    '</div>'))
                }
              })
            }
            form.classList.add('was-validated')
          }, false)
        })
    }

    enableFormValidation()
  </script>

  <script>
    //enabling
  </script>

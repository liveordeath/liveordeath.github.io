

function myFunction() {
  a = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("page-wrapper").style.display = "block";
  document.querySelector('body').style.position= "relative";
}

(function($) {

  // Menu filer
  $("#menu-flters li a").click(function() {
    $("#menu-flters li a").removeClass('active');
    $(this).addClass('active');

    var selectedFilter = $(this).data("filter");
    //  $("#menu-wrapper").fadeTo(100, 0);

    $(".menu-restaurant").fadeOut();

    setTimeout(function() {
      $(selectedFilter).slideDown();
      //$("#menu-wrapper").fadeTo(300, 1);
    }, 300);
  });

  // Add smooth scrolling to all links in navbar + footer link
  $(".sidenav a").on('click', function(event) {
    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }

  });

  $(".sidenav a").on('click', function() {
		closeNav();
	});

})(jQuery);
jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('form.contactForm').submit(function() {
    var f = $(this).find('.form-group'),
        ferror = false,
        emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (! i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;
    else var str = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "contactform/contactform.php",
      data: str,
      success: function(msg) {
        // alert(msg);
        if (msg == 'OK') {
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.contactForm').find("input, textarea").val("");
        } else {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html(msg);
        }

      }
    });
    return false;
  });
  document.querySelector('.form-search-open').onclick = function () {
    document.querySelector('.form-search-header').classList.toggle('active')
  }





});

$(document).ready(function() {
  // water effect
  $('.demo').ripples({
    resolution:512,
    dropRadius: 10,
    perturbance: 0.01,
  })
  //auto rain


  // Define a blank array for the effect positions. This will be populated based on width of the title.
  var bArray = [];
  // Define a size array, this will be used to vary bubble sizes
  var sArray = [4,6,8,10,12,14];

  // Push the header width values to bArray
  for (var i = 0; i < $('.bubbles').width(); i++) {
    bArray.push(i);
  }

  // Function to select random array element
  // Used within the setInterval a few times
  function randomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // setInterval function used to create new bubble every 350 milliseconds
  setInterval(function(){

    // Get a random size, defined as variable so it can be used for both width and height
    var size = randomValue(sArray);
    // New bubble appeneded to div with it's size and left position being set inline
    // Left value is set through getting a random value from bArray
    $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

    // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
    // Callback function used to remove finsihed animations from the page
    $('.individual-bubble').animate({
          'bottom': '100%',
          'opacity' : '-=0.7'
        }, 3000, function(){
          $(this).remove()
        }
    );


  }, 350);

});

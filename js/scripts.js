




function slickHeight()
{


	jQuery(document).find(".slick-track").each(function(){
		console.log("test");
		
		var $sth = jQuery(this).css("height");
		jQuery(this).find(".slick-slide").each(function(){
			jQuery(this).css("height", $sth);
		});
		
	});
	
	
}





jQuery(document).ready(function(){
	
	
	
	jQuery(".partners-link").on('click', function(event) {
		var $linkp = jQuery(this).attr("data-href");
		window.location = $linkp;
  });
  
  
  

  jQuery(".btn-go").on('click', function(event) {

  
	

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;
	  var $scTop = jQuery(hash).offset().top - 82;

      jQuery('html, body').animate({
        scrollTop: $scTop
      }, 800, function(){
   

        window.location.hash = hash;
      });
    } 

	
	
  });
});




function headerMargin()
{
	$headermargin = jQuery("header").height();
	//jQuery(".site-body").css("padding-top", $headermargin); 
}
jQuery(window).resize(function() {
	headerMargin();
});


function resetForm() {
	jQuery("form").each(function(){
			this.reset();
	});
}

function aBlock()
{
	jQuery(".a-block").each(function(){
		
		jQuery(this).click(function(){
			var $href = jQuery(this).find("a").attr("href");
			window.location.href = $href;
		});
		
	});
}

function pageHead()
{
	var $pageHead = document.querySelector(".page-head");
	if($pageHead){
		var $phContent = document.querySelector(".page-head .content");
		var $isimage = "true";
		console.log($phContent);
		
		
		if(jQuery($pageHead).css("background-image") != "none")
		{
			console.log( jQuery($pageHead).css("background-image") );
			console.log("if");
		}
		else{
			console.log( jQuery($pageHead).css("background-image") );
			console.log("else");
			$isimage = "false";
		}
		
		
		if($isimage == "false")
		{
			jQuery($pageHead).css("min-height", "240px");
		}
		
	}
	
	
}
 
jQuery(document).ready(function() {
	headerMargin();
	
	aBlock();

	jQuery(function() {
        jQuery('a[href$=".pdf"]').prop('target', '_blank');
    });

	jQuery( document ).on( "focus", ".err", function() {
		jQuery(this).removeClass('err');
	});

	resetForm();
	var Wzor_email  =/^[0-9a-zA-Z._-]+\@[0-9a-zA-Z_-]+\.[0-9a-zA-Z._]+$/;


	jQuery('#contact-form button').click(function() {


		jQuery('#contact-form #err2').html('').hide();
		//jQuery(this).find('#err2').html('').hide();
		jQuery(this).find('.err').removeClass('err');
		//alert(myAjax.ajaxurl);
		var name = jQuery('#name').val();
		var subject = jQuery('#subject').val();
		var surname = jQuery('#surname').val();
		var email = jQuery('#email').val();
		var message = jQuery('#message').val();

		var response = grecaptcha.getResponse();

		/*if(response.length == 0){
			alert('not');
		} else {
			alert('yes');
		}*/
				if (subject == '')
				{
					var err = 1;
					jQuery('#subject').addClass('err');
				}
				if (name == '')
				{
					var err = 1;
					jQuery('#name').addClass('err');
				}
				if (surname == '')
				{
					var err = 1;
					jQuery('#surname').addClass('err');
				}
				if (email == '')
				{
					var err = 1;
					jQuery('#email').addClass('err');
				}
				else if (Wzor_email.test(email)!=true)
				{
					var err = 1;
					jQuery('#email').addClass('err');
				}
				if (message == '')
				{
					var err = 1;
					jQuery('#message').addClass('err');
				}
				/*if(response.length == 0){
					jQuery('.g-recaptcha').addClass('err');
					var err = 1;
				}*/
				if (err == 1)
				{
					//jQuery('<div class="err">Nie zostały wypełnione wszystkie wymagane pola.<br>Wymagane pola zostały oznaczone kolorem czerwonym.</div>').appendTo( jQuery( "#contact-form #err2" ) );
					jQuery('<div class="error">Nie zostały wypełnione wszystkie wymagane pola.<br>Wymagane pola zostały oznaczone kolorem czerwonym.</div>').appendTo( jQuery( "#contact-form #err2" ) );
					jQuery('#contact-form #err2').fadeIn();
								
								//jQuery('#contact-form #err2').fadeIn().html();
					//alert('You did not fill all required fields. Please correct that!');
					return false;
				}
				jQuery.ajax({
					type: "POST",
					url: myAjax.ajaxurl,
					data : {action: "jv_form_data", name : name, surname : surname, email : email, message : message, captcha : response},
					//data: dataString,
					action: 'jv_form_data',
					beforeSend:  function() {
						//jQuery('#contact-form #err2').html('').hide();
						jQuery(".submit").html("proszę czekać").addClass('loading');
					},
					success: function(text) {
						//alert(text);
						if (text != 1)
						{
								jQuery('<div class="error">Wystąpił błąd!<br>Nie zaznaczyłeś, że nie jesteś robotem.</div>').appendTo( jQuery( "#contact-form #err2" ) );
								jQuery('#contact-form #err2').fadeIn();
								jQuery(".submit").removeClass('loading');
						} 
						else if (text == 1)
						{
								resetForm();
								jQuery('<div class="green">Twoja wiadomość została wysłana.<br>Skontaktujemy się z Tobą tak szybko jak to będzie możliwe.</div>').appendTo( jQuery( "#contact-form #err2" ) ).fadeIn();
								jQuery('#contact-form #err2').fadeIn();
						}
						jQuery(".submit").html("wyślij wiadomość").removeClass('loading');
						grecaptcha.reset();
					} 
				});
			return false;
	});
	
	
	
	
});


jQuery(document).ready(function(){
	jQuery('.fblbHead_Right').click(function(){
		jQuery('.fblbCenterOuter_Right').toggleClass('opened_Right');
	});
});







jQuery(window).scroll(function (event) {
    var scroll = jQuery(window).scrollTop();
    if (scroll > 0)
    {
		jQuery("header").addClass('bborder');
    } else {
		jQuery("header").removeClass('bborder');
	}
});


// hide #back-top first
	jQuery("#to_the_top").hide();
	
	// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 100) {
				jQuery('#to_the_top').fadeIn();
			} else {
				jQuery('#to_the_top').fadeOut();
			}
		});

		// scroll body to 0px on click
		jQuery('#to_the_top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});		 
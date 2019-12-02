

    
/* Header */

            /* Animation Hamburger nav Process */
			$(document).ready(function(){

				$('.menu-toggle').click(function(){
					$(this).toggleClass('open');
				});

			});
            /* Open NAV Process */
			$(document).ready(function(){

				$('.menu-toggle').click(function(){
					$('.left_case_nav').toggleClass('active');
				});
            });

            /* Add Header Class */
            $(window).on('scroll',function(){
                if($(window).scrollTop()){
                    $('header').addClass('active');  
                    $('.sec_arrow_up').addClass('active');
                    $('.sec_shop_nav_hover').addClass('active');              
                }else{
                    $('header').removeClass('active');
                    $('.sec_arrow_up').removeClass('active');
                    $('.sec_shop_nav_hover').removeClass('active');
                }
            });

            /* Open Shop Nav Hover */
            $('.hover_shop_method').bind('mouseover',function(){
				var sec_shop_nav_hover = document.querySelector('.sec_shop_nav_hover');
				sec_shop_nav_hover.style.display = "block";				
            });
            $('.hover_shop_method').bind('mouseout', function(){				
				var sec_shop_nav_hover = document.querySelector('.sec_shop_nav_hover');
				sec_shop_nav_hover.style.display = "none";	
            });
            
            $('.sec_shop_nav_hover').bind('mouseover',function(){
				var sec_shop_nav_hover = document.querySelector('.sec_shop_nav_hover');
				sec_shop_nav_hover.style.display = "block";				
            });
            $('.sec_shop_nav_hover').bind('mouseout', function(){				
				var sec_shop_nav_hover = document.querySelector('.sec_shop_nav_hover');
				sec_shop_nav_hover.style.display = "none";	
			});


/* Section 1 Page Down and Up Process */

            $(document).ready(function(){
                var scrollLink = $('.scroll');
                //smooth Scrolling
                scrollLink.click(function(e){
                    e.preventDefault();
                    // console.log(this.hash);
                    $('body,html').animate({
                        scrollTop: $(this.hash).offset().top
                    },1000);
                });
            });

/* Section 2 quantity */
            
            var minus = document.querySelector(".minus");
            var plus = document.querySelector(".plus");
            var prev_val = $("#value").text();
            
            minus.onclick = function(){
                prev_val--;
                if(prev_val == -1){
                    prev_val = 0;
                    document.getElementById("value").innerHTML = prev_val;  
                }else{
                     document.getElementById("value").innerHTML = prev_val;
                }  
            }

            plus.onclick = function(){
                prev_val++;
                document.getElementById("value").innerHTML = prev_val;
            }

            
/* OPEN CART FUNCTION */
        /* Big */
        var open_cart = document.querySelector(".open_cart");  
        var close = document.querySelector(".close");    
        var cart_body = document.querySelector(".sec_1_cart"); 
        var add_cart_btn = document.querySelector(".add_cart_btn"); 

        open_cart.onclick = function(){
            cart_body.style.display = "block";
        }
        close.onclick = function(){
            cart_body.style.display = "none";
        }    
    /* Small */   
        var cart_toggle = document.querySelector(".cart_toggle");  
   
        cart_toggle.onclick = function(){
            cart_body.style.display = "block";
        }
    /* Cart BTN */
        add_cart_btn.onclick = function(){
            cart_body.style.display = "block";
        }

/* End OPEN CART FUNCTION */   
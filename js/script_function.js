
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
            
/* Section 1 Slider Animation */    

            var sec_1_left_slide = document.querySelector(".sec_1_left_btn");  
            var sec_1_right_slide = document.querySelector(".sec_1_reight_btn");
            var parent_dots = document.querySelector(".case_dot_banner").children;
            var sec_1_counter = 0;   

            sec_1_left_slide.onclick = function(){
                sec_1_slide_method("prev");
            }
            sec_1_right_slide.onclick = function(){
                sec_1_slide_method("next");
            }

            sec_1_slide_method();

            function sec_1_slide_method(direction){

                if(direction == "next"){
                    sec_1_counter++;
                    if(sec_1_counter == 4){
                        sec_1_counter = 0;
                    }
                }else if(direction == "prev"){
                    sec_1_counter--;
                    if(sec_1_counter == -1){
                        sec_1_counter = 3;
                    }
                }


                var all_img_file = "iphone_11_case,airpods_cases_2,pd_charger,speaker";
                var holder_current_val ="";

                var array = all_img_file.split(",");

                for(var x=0;x<array.length;x++){
                    if(x == sec_1_counter ){
                        holder_current_val = array[x];
                    }
                }

                $(document).ready(function(){
                    $('.sec_layer_1_banner').css('background-image', 'url(../img/'+holder_current_val+'.jpg)');
                });

                /* Dot Process */
                for(var x=0;x<parent_dots.length;x++){
                    parent_dots[x].classList.remove("active");    
                }
                parent_dots[sec_1_counter].classList.add("active");

            }

            /* Auto Slide Process */    
            setInterval(function(){

                sec_1_counter++;

                if(sec_1_counter == 4){
                    sec_1_counter = 0;
                }

                sec_1_slide_method();

            },4000);

/* Section 1 Page Down Process */

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

            

/* section 2 process */

            var best_btn = document.querySelector(".left_sel");
            var release_btn = document.querySelector(".right_sel");
            var box_1 = document.querySelector(".box_case");
            var box_2 = document.querySelector(".box_case_2");

            best_btn.onclick = function(){
                box_1.classList.remove("active");
                box_2.classList.remove("active");   
                box_1.classList.add("active");

                release_btn.classList.remove("active");
                best_btn.classList.remove("active");
                best_btn.classList.add("active");
            }

            release_btn.onclick = function(){
                box_1.classList.remove("active");
                box_2.classList.remove("active");
                box_2.classList.add("active");

                best_btn.classList.remove("active");
                release_btn.classList.remove("active");
                release_btn.classList.add("active");
            }


/* Section 4 Image Slider */

            var sec_4_left_btn = document.querySelector(".sec_4_left_btn");
            var sec_4_right_btn = document.querySelector(".sec_4_right_btn");
            var totalSLide = document.querySelector(".main_box_content").children;
            var sec_4_counter = 0;

            sec_4_left_btn.onclick = function(){
                sec_4_method("prev");
            };

            sec_4_right_btn.onclick = function(){
                sec_4_method("next");
            };

            sec_4_method();

            function sec_4_method(direction){

                if(direction == "next"){
                    sec_4_counter++;  
                    if(sec_4_counter == 2){
                        sec_4_counter = 0; 
                    }             
                }else if(direction == "prev"){
                    sec_4_counter--;
                    if(sec_4_counter == -1){
                        sec_4_counter = 1; 
                    }
                }    

                for(var x=0;x<totalSLide.length-1;x++){
                    totalSLide[x].classList.remove("active");
                }

                totalSLide[sec_4_counter].classList.add("active");  
                
            }

/* Section 7 Process */            
          
            var sec_7_icon_case = document.querySelector(".icon_case").children;
            var sec_7_counter=0;

            setInterval(function(){
                sec_7_counter++;

                if(sec_7_counter == 6){
                    sec_7_counter = 0;
                    sec_7_method();
                }else{
                    sec_7_method();
                }    
                  
            },5000); 
            
            sec_7_method();

            function sec_7_method(){
         
                for(var x=0;x<sec_7_icon_case.length;x++){
                    sec_7_icon_case[x].classList.remove("inactive");
                    sec_7_icon_case[x].classList.remove("active");
                }

                for(var x=0;x<sec_7_icon_case.length;x++){   
                sec_7_icon_case[x].classList.add("inactive");
                }

                 sec_7_icon_case[sec_7_counter].classList.remove("inactive");
                 sec_7_icon_case[sec_7_counter].classList.add("active");
            }


/* Swiper Script */
        
        /* Section 2 */ 
            var swiper = new Swiper('.swiper-container', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 20,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows : true,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            });

        /* Section 8 */    
            var swiper = new Swiper('.swiper-container_sec_8', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 20,
                    stretch: 0,
                    depth: 500,
                    modifier: 1,
                    slideShadows : true,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            });

/* End Swiper Script */               

/* OPEN CART FUNCTION */
        /* Big */
            var open_cart = document.querySelector(".open_cart");  
            var close = document.querySelector(".close");    
            var cart_body = document.querySelector(".sec_1_cart"); 

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

/* End OPEN CART FUNCTION */
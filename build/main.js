webpackJsonp([1],[function(t,e,i){i(4),i(7),i(1),i(2),i(5),i(6),i(3),i(8),i(1),i(2),i(9),jQuery(function(t){var e=window.HHH||{},n=t("#menu").clone().attr("id","navigation-mobile");e.mobileNav=function(){var e=t(window).width();979>=e?t("#mobile-nav").length>0&&(n.insertAfter("#menu"),t("#navigation-mobile #menu-nav").attr("id","menu-nav-mobile")):(t("#navigation-mobile").css("display","none"),t("#mobile-nav").hasClass("open")&&t("#mobile-nav").removeClass("open"))},e.listenerMenu=function(){t("#mobile-nav").on("click",function(e){t(this).toggleClass("open"),t("#mobile-nav").hasClass("open")?t("#navigation-mobile").slideDown(500,"easeOutExpo"):t("#navigation-mobile").slideUp(500,"easeOutExpo"),e.preventDefault()}),t("#menu-nav-mobile a").on("click",function(){t("#mobile-nav").removeClass("open"),t("#navigation-mobile").slideUp(350,"easeOutExpo")})},e.slider=function(){t.supersized({slideshow:1,autoplay:1,start_slide:1,stop_loop:0,random:0,slide_interval:12e3,transition:1,transition_speed:300,new_window:1,pause_hover:0,keyboard_nav:1,performance:1,image_protect:1,min_width:0,min_height:0,vertical_center:1,horizontal_center:1,fit_always:0,fit_portrait:1,fit_landscape:0,slide_links:"blank",thumb_links:0,thumbnail_navigation:0,slides:[{image:i(20),title:'<div class="logo"></div>',thumb:"",url:""},{image:i(18),title:'<div class="logo"></div>',thumb:"",url:""},{image:i(19),title:'<div class="logo"></div>',thumb:"",url:""}],progress_bar:0,mouse_scrub:0})},e.nav=function(){new Waypoint.Sticky({element:t(".sticky-nav")[0]})},e.filter=function(){if(t("#projects").length>0){var e=t("#projects");e.imagesLoaded(function(){e.isotope({animationEngine:"best-available",itemSelector:".item-thumbs",layoutMode:"fitRows"})});var i=t("#options .option-set"),n=i.find("a");n.click(function(){var i=t(this);if(i.hasClass("selected"))return!1;var n=i.parents(".option-set");n.find(".selected").removeClass("selected"),i.addClass("selected");var s={},o=n.attr("data-option-key"),a=i.attr("data-option-value");return a="false"===a?!1:a,s[o]=a,"layoutMode"===o&&"function"==typeof changeLayoutMode?changeLayoutMode(i,s):e.isotope(s),!1})}},e.fancyBox=function(){(t(".fancybox").length>0||t(".fancybox-media").length>0||t(".fancybox-various").length>0)&&(t(".fancybox").fancybox({padding:0,beforeShow:function(){this.title=t(this.element).attr("title"),this.title="<h4>"+this.title+"</h4><p>"+t(this.element).parent().find("img").attr("alt")+"</p>"},helpers:{title:{type:"inside"}}}),t(".fancybox-media").fancybox({openEffect:"none",closeEffect:"none",helpers:{media:{}}}))},e.contactForm=function(){t("#contact-submit").on("click",function(){$contact_form=t("#contact-form");var e=$contact_form.serialize();return t.ajax({type:"POST",url:"_include/php/contact.php",data:e,dataType:"json",success:function(e){e.status&&(t("#contact-form input").val(""),t("#contact-form textarea").val("")),t("#response").empty().html(e.html)}}),!1})},e.menu=function(){t("#menu-nav, #menu-nav-mobile").onePageNav({currentClass:"current",changeHash:!1,scrollSpeed:750,scrollOffset:30,scrollThreshold:.5,easing:"easeOutExpo",filter:":not(.external)"})},e.goSection=function(){t("#nextsection").on("click",function(){return $target=t(t(this).attr("href")).offset().top-30,t("body, html").animate({scrollTop:$target},750,"easeOutExpo"),!1})},e.goUp=function(){t("#goUp").on("click",function(){return $target=t(t(this).attr("href")).offset().top-30,t("body, html").animate({scrollTop:$target},750,"easeOutExpo"),!1})},e.scrollToTop=function(){var e=(t(window).width(),!1),i=t("#back-to-top");i.click(function(e){t("body,html").animate({scrollTop:"0"},750,"easeOutExpo"),e.preventDefault()}),t(window).scroll(function(){e=!0}),setInterval(function(){e&&(e=!1,t(window).scrollTop()>1e3?i.css("display","block"):i.css("display","none"))},250)},e.utils=function(){t(".item-thumbs").bind("touchstart",function(){t(".active").removeClass("active"),t(this).addClass("active")}),t(".image-wrap").bind("touchstart",function(){t(".active").removeClass("active"),t(this).addClass("active")}),t("#social ul li").bind("touchstart",function(){t(".active").removeClass("active"),t(this).addClass("active")})},e.accordion=function(){var e=t(".accordion-heading.accordionize");e.delegate(".accordion-toggle","click",function(i){t(this).hasClass("active")?(t(this).removeClass("active"),t(this).addClass("inactive")):(e.find(".active").addClass("inactive"),e.find(".active").removeClass("active"),t(this).removeClass("inactive"),t(this).addClass("active")),i.preventDefault()})},e.toggle=function(){var e=t(".accordion-heading.togglize");e.delegate(".accordion-toggle","click",function(e){t(this).hasClass("active")?(t(this).removeClass("active"),t(this).addClass("inactive")):(t(this).removeClass("inactive"),t(this).addClass("active")),e.preventDefault()})},e.toolTip=function(){t("a[data-toggle=tooltip]").tooltip()},e.slider(),t(document).ready(function(){Modernizr.load([{test:Modernizr.placeholder,nope:"build/placeholder.js",complete:function(){Modernizr.placeholder||Placeholders.enable({live:!0,hideOnFocus:!1,className:"yourClass",textColor:"#999"})}}]),t("body").jpreLoader({splashID:"#jSplash",showSplash:!0,showPercentage:!0,autoClose:!0,splashFunction:function(){t("#circle").delay(250).animate({opacity:1},500,"linear")}}),e.nav(),e.mobileNav(),e.listenerMenu(),e.menu(),e.goSection(),e.goUp(),e.filter(),e.fancyBox(),e.contactForm(),e.scrollToTop(),e.utils(),e.accordion(),e.toggle(),e.toolTip();var i=t("#response");i.on({error:function(t,e){var n=e.message;i.html(n).removeClass("alert-info alert-success").addClass("alert-danger")},loading:function(t,e){i.html(e||"Loading…").removeClass("alert-danger alert-success").addClass("alert-info")},success:function(t,e){i.html(e||"OK. Thanks, we will come back to you....").removeClass("alert-danger alert-info").addClass("alert-success")}}),Parse.initialize("wqAQVM4j8pnguy8CJZcAmI4hkzKi1M1mtKMt3Ctv","0JY78imj6EI9hZwfNVjkgyhl0h803VwvsPgWEZhd");var n=t("#contact-form");n.submit(function(e){var s=n.find("button.submit").attr("disabled","disabled");e.preventDefault();var o=t(this),a=o.find("input[name='Name']").val(),r=o.find("input[name='Email']").val(),l=o.find("textarea[name='Message']").val(),c=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;if(!c.test(r))return alert("Invalid email!"),!1;var h=Parse.Object.extend("contact"),d=new h;d.save({name:a,mail:r,message:l},{success:function(){i.trigger("success"),n.hide()},error:function(t,e){i.trigger("error",e),n.trigger("reset"),s.removeAttr("disabled")}})})}),t(window).resize(function(){e.mobileNav()})})},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(t,e,i){t.exports='<!DOCTYPE html><!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"><![endif]--><!--[if (IE 7)&!(IEMobile)]><html class="no-js lt-ie9 lt-ie8" lang="en"><![endif]--><!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9" lang="en"><![endif]--><!--[if (IE 9)]><html class="no-js ie9" lang="en"><![endif]--><!--[if gt IE 8]><!--><html lang=en-US><!--<![endif]--><head><meta http-equiv=Content-Type content="text/html; charset=UTF-8"><title>Hanna Huzarska Hats | Hat Company</title><meta name=description content="Insert Your Site Description"><meta name=viewport content="width=device-width, initial-scale=1.0"><meta name=HandheldFriendly content=true><meta name=MobileOptimized content=320><link rel=apple-touch-icon sizes=57x57 href=/apple-touch-icon-57x57.png><link rel=apple-touch-icon sizes=60x60 href=/apple-touch-icon-60x60.png><link rel=apple-touch-icon sizes=72x72 href=/apple-touch-icon-72x72.png><link rel=apple-touch-icon sizes=76x76 href=/apple-touch-icon-76x76.png><link rel=apple-touch-icon sizes=114x114 href=/apple-touch-icon-114x114.png><link rel=apple-touch-icon sizes=120x120 href=/apple-touch-icon-120x120.png><link rel=apple-touch-icon sizes=144x144 href=/apple-touch-icon-144x144.png><link rel=apple-touch-icon sizes=152x152 href=/apple-touch-icon-152x152.png><link rel=apple-touch-icon sizes=180x180 href=/apple-touch-icon-180x180.png><link rel=icon type=image/png href=/favicon-32x32.png sizes=32x32><link rel=icon type=image/png href=/favicon-194x194.png sizes=194x194><link rel=icon type=image/png href=/favicon-96x96.png sizes=96x96><link rel=icon type=image/png href=/android-chrome-192x192.png sizes=192x192><link rel=icon type=image/png href=/favicon-16x16.png sizes=16x16><link rel=manifest href=/manifest.json><meta name=msapplication-TileColor content=#da532c><meta name=msapplication-TileImage content=/mstile-144x144.png><meta name=theme-color content=#ffffff><!--[if IEMobile]><meta http-equiv="cleartype" content="on"><![endif]--><link href=build/main.css rel=stylesheet><script src=build/modernizr.js></script><script type=text/javascript>var _gaq = _gaq || [];\n  _gaq.push([\'_setAccount\', \'Insert Your Code\']);\n  _gaq.push([\'_trackPageview\']);\n\n  (function() {\n    var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n    ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n    var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n  })();</script><body><div class=ole><section id=jSplash><div id=circle></div></section></div><div id=home-slider><div class=overlay></div><div class=slider-text><div id=slidecaption></div></div><div class=control-nav><a id=prevslide class=load-item><i class=font-icon-arrow-simple-left></i></a> <a id=nextslide class=load-item><i class=font-icon-arrow-simple-right></i></a><ul id=slide-list></ul><a id=nextsection href=#work><i class=font-icon-arrow-simple-down></i></a></div></div><header><div class=sticky-nav><a id=mobile-nav class=menu-nav href=#menu-nav></a><div id=logo><a id=goUp href=#home-slider title="Hanna Huzarska Hats">Hanna Huzarska Hats</a></div><nav id=menu><ul id=menu-nav><li class=current><a href=#home-slider>Home</a></li><li><a href=#work>Our Work</a></li><li><a href=#about>About</a></li><li><a href=#contact>Contact</a></li></ul></nav></div></header><div id=work class=page><div class=container><div class=row><div class=span12><div class=title-page><h2 class=title>Our Work</h2></div></div></div><div class=row><div class=span3><nav id=options class=work-nav><ul id=filters class=option-set data-option-key=filter><li><h4>Type of Work</h4></li><li><a href=#filter data-option-value=* class=selected>All</a></li></ul></nav></div><div class=span9><div class=row><section id=projects><ul id=thumbs><li class="item-thumbs span3 design"><a class="hover-wrap fancybox" data-fancybox-group=gallery href="require(\'_include/img/work/thumbs/img01.jpg\')"><span class=overlay-img></span> <span class="overlay-img-thumb font-icon-plus"></span></a>  <img src='+i(21)+' alt="Photo: Paweł Rychert  models: Ewelina Bremmer, Olga Kwiatkowska, Aleksandra Popeda"></li><li class="item-thumbs span3 design"><a class="hover-wrap fancybox" data-fancybox-group=gallery href=build/img02.jpg><span class=overlay-img></span> <span class="overlay-img-thumb font-icon-plus"></span></a>  <img src='+i(22)+' alt="Photo: Paweł Rychert  models: Ewelina Bremmer, Olga Kwiatkowska, Aleksandra Popeda"></li><li class="item-thumbs span3 photography"><a class="hover-wrap fancybox" data-fancybox-group=gallery href=build/img03.jpg><span class=overlay-img></span> <span class="overlay-img-thumb font-icon-plus"></span></a>  <img src='+i(23)+' alt="Photo: Paweł Rychert  models: Ewelina Bremmer, Olga Kwiatkowska, Aleksandra Popeda"></li><li class="item-thumbs span3 photography"><a class="hover-wrap fancybox" data-fancybox-group=gallery href=build/img04.jpg><span class=overlay-img></span> <span class="overlay-img-thumb font-icon-plus"></span></a>  <img src='+i(24)+' alt="Photo: Paweł Rychert  models: Ewelina Bremmer, Olga Kwiatkowska, Aleksandra Popeda"></li><li class="item-thumbs span3 photography"><a class="hover-wrap fancybox" data-fancybox-group=gallery href=build/img05.jpg><span class=overlay-img></span> <span class="overlay-img-thumb font-icon-plus"></span></a>  <img src='+i(25)+' alt="Photo: Paweł Rychert  models: Ewelina Bremmer, Olga Kwiatkowska, Aleksandra Popeda"></li><li class="item-thumbs span3 design"><a class="hover-wrap fancybox" data-fancybox-group=gallery href=build/img06.jpg><span class=overlay-img></span> <span class="overlay-img-thumb font-icon-plus"></span></a>  <img src='+i(26)+' alt="Photo: Paweł Rychert  models: Ewelina Bremmer, Olga Kwiatkowska, Aleksandra Popeda"></li><li class="item-thumbs span3 design"><a class="hover-wrap fancybox" data-fancybox-group=gallery href=build/img07.jpg><span class=overlay-img></span> <span class="overlay-img-thumb font-icon-plus"></span></a>  <img src='+i(27)+' alt="photographer Piotr Domagała, assistant photographer Dominika Bąk, models: Julia W./ Mango ; Sabina W./ Rebel, designer : Sophie Kula, hat designer : Hania Huzarska Hats, stylist Karolina Chudek, assistants of stylist Sylwia Morawska, Zuza Grychowska, set designer Zuzanna Rynkiewicz, assistant set designer Ania Rzeźniczek, make up Kamila Jankowska, hair stylist Adam Wilczewski, Production Manager Sasha Respinger, Producers: Adam Sikora , Maciej Ryś"></li><li class="item-thumbs span3 design"><a class="hover-wrap fancybox" data-fancybox-group=gallery href=build/img08.jpg><span class=overlay-img></span> <span class="overlay-img-thumb font-icon-plus"></span></a>  <img src='+i(28)+' alt="photographer Piotr Domagała, assistant photographer Dominika Bąk, models: Julia W./ Mango ; Sabina W./ Rebel, designer : Sophie Kula, hat designer : Hania Huzarska Hats, stylist Karolina Chudek, assistants of stylist Sylwia Morawska, Zuza Grychowska, set designer Zuzanna Rynkiewicz, assistant set designer Ania Rzeźniczek, make up Kamila Jankowska, hair stylist Adam Wilczewski, Production Manager Sasha Respinger, Producers: Adam Sikora , Maciej Ryś"></li><li class="item-thumbs span3 design"><a class="hover-wrap fancybox" data-fancybox-group=gallery href=build/img09.jpg><span class=overlay-img></span> <span class="overlay-img-thumb font-icon-plus"></span></a>  <img src='+i(29)+' alt="photographer Piotr Domagała, assistant photographer Dominika Bąk, models: Julia W./ Mango ; Sabina W./ Rebel, designer : Sophie Kula, hat designer : Hania Huzarska Hats, stylist Karolina Chudek, assistants of stylist Sylwia Morawska, Zuza Grychowska, set designer Zuzanna Rynkiewicz, assistant set designer Ania Rzeźniczek, make up Kamila Jankowska, hair stylist Adam Wilczewski, Production Manager Sasha Respinger, Producers: Adam Sikora , Maciej Ryś"></li><li class="item-thumbs span3 design"><a class="hover-wrap fancybox" data-fancybox-group=gallery href=build/img10.jpg><span class=overlay-img></span> <span class="overlay-img-thumb font-icon-plus"></span></a>  <img src='+i(30)+' alt="photographer Piotr Domagała, assistant photographer Dominika Bąk, models: Julia W./ Mango ; Sabina W./ Rebel, designer : Sophie Kula, hat designer : Hania Huzarska Hats, stylist Karolina Chudek, assistants of stylist Sylwia Morawska, Zuza Grychowska, set designer Zuzanna Rynkiewicz, assistant set designer Ania Rzeźniczek, make up Kamila Jankowska, hair stylist Adam Wilczewski, Production Manager Sasha Respinger, Producers: Adam Sikora , Maciej Ryś"></li><li class="item-thumbs span3 design"><a class="hover-wrap fancybox" data-fancybox-group=gallery href=build/img11.jpg><span class=overlay-img></span> <span class="overlay-img-thumb font-icon-plus"></span></a>  <img src='+i(31)+' alt="photographer Piotr Domagała, assistant photographer Dominika Bąk, models: Julia W./ Mango ; Sabina W./ Rebel, designer : Sophie Kula, hat designer : Hania Huzarska Hats, stylist Karolina Chudek, assistants of stylist Sylwia Morawska, Zuza Grychowska, set designer Zuzanna Rynkiewicz, assistant set designer Ania Rzeźniczek, make up Kamila Jankowska, hair stylist Adam Wilczewski, Production Manager Sasha Respinger, Producers: Adam Sikora , Maciej Ryś"></li></ul></section></div></div></div></div></div><div id=about class=page-alternate><div class=container><div class=row><div class=span12><div class=title-page><h2 class=title>About Us</h2><h5 class=title-description>All headpieces are a statement. Weather it is a elegant fascinator, big brimm straw hat, or urban streetstyle turban, they all have ability to bring elegance, ease or crazyness to stylysation. Each one is made to make a woomen who wears it hold her head up. That is why it is important to pick a hat that is perfect for individual. One that will feal like You. In my workshop hats and fascinators are hand- and custom-made so it will suits You best. To make it I use the best fabrics and accesorise from all around the world. Every day I am looking for new inspirations and ways to light my passion and Your style because I believe we all deserve no less than perfection.</h5></div></div></div></div></div><div id=contact class=page><div class=container><div class=row><div class=span12><div class=title-page><h2 class=title>Contact</h2></div></div></div><div class=row><div class=span9><form id=contact-form class=contact-form action=#><input type=hidden name=authtoken value=10a33cc5e1f94b5fd3fb56882f44f4c8><p class=contact-name><input id=contact_name placeholder="Full Name" name=Name></p><p class=contact-email><input id=contact_email placeholder="Email Address" name=Email></p><p class=contact-message><textarea id=contact_message placeholder="Your Message" name=Message rows=15 cols=40></textarea></p><p class=contact-submit><button class=submit type=submit>Send Your Email</button></p></form><div id=response></div></div><div class=span3><div class=contact-details><h3>Contact Details</h3><ul><li><h4>Hanna Huzarska Hats</h4></li><li><a href=mailto:contact@hannahuzarska.com>contact@hannahuzarska.com</a></li><li><a href="tel:(+48) 511.743.160">(+48) 511.743.160</a></li><li>Foksal 17b/29<br>00-372 Warsaw<br>Poland<br>mon.-fri. 12 -6 (visits by appointment)</li></ul></div></div></div></div></div><div id=social-area class=page><div class=container><div class=row><div class=span12><nav id=social><ul><li><a href=https://www.facebook.com/HHHats title="Follow Me on Facebook" target=_blank><span class=font-icon-social-facebook></span></a></li><li><a href=https://plus.google.com/hannahuzarskahats title="Follow Me on Google Plus" target=_blank><span class=font-icon-social-google-plus></span></a></li><li><a href=http://www.linkedin.com/in/hannahuzarskahats title="Follow Me on LinkedIn" target=_blank><span class=font-icon-social-linkedin></span></a></li><li><a href="https://instagram.com/hanna_huzarska_hats/" title="Follow Me on Instagram" target=_blank><span class=socicon>x</span></a></li></ul></nav></div></div></div></div><footer><p class=credits>&copy;2015 Hanna Huzarska</p></footer><a id=back-to-top href=#><i class=font-icon-arrow-simple-up></i></a><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.js></script><script src=//www.parsecdn.com/js/parse-1.3.3.min.js></script><script src=build/vendor.js></script><script src=build/main.js></script>'},,,,,,,,,function(t,e,i){t.exports=i.p+"1819aab6c5198e61dc026cf38c6415d0.jpg"},function(t,e,i){t.exports=i.p+"8d2739d88f686cde08051a43f2a66994.jpg"},function(t,e,i){t.exports=i.p+"b7ed7a4319d42f4fcca1448d8c9a8088.jpg"},function(t,e,i){t.exports=i.p+"a02b31481fb7e53ad30b7fc2ab726de3.jpg"},function(t,e,i){t.exports=i.p+"71919f9357f8dd6fad10086b18b1c865.jpg"},function(t,e,i){t.exports=i.p+"5cdd5b36b0b5f5a0512002509aadad36.jpg"},function(t,e,i){t.exports=i.p+"269c9f670fe44a4683d006c06a2af0bc.jpg"},function(t,e,i){t.exports=i.p+"eff90e391af0a9b539362f42043e123c.jpg"},function(t,e,i){t.exports=i.p+"9abcb2988030e45341c69df63aa38d07.jpg"},function(t,e,i){t.exports=i.p+"60dc641b735655c120c1f5f1d6841072.jpg"},function(t,e,i){t.exports=i.p+"ca13f3a6a15ede0c6b5412cc1250a8d4.jpg"},function(t,e,i){t.exports=i.p+"20b52a0f5b1fd1cb512c641b507e7c00.jpg"},function(t,e,i){t.exports=i.p+"070ffc76158aa1c38c3f2308cfbf1556.jpg"},function(t,e,i){t.exports=i.p+"68db438eeb78b671575719c3c60c270a.jpg"}]);

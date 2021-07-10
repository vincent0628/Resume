/*执行事件*/
$(function() {
    //打印
    $('.button_print').click(function(){
        $('.main').print({
        addGlobalStyles : true,
        mediaPrint : true
        });
    });

    //animate avatar info
    $('.avatar_pic,.tel_me').click(function(){
        $('.tip_avatar_bg').show().transition({ 
            opacity: 100,
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            rotateX: '180deg'
        },1000,'easeOutQuart',function(){
            $('body').addClass('of');
            $('.tip_avatar').show().transition({
                opacity: 100
            },500,function(){
                $('.tip_avatar_bg').hide().css({
                    opacity: 0,
                    top: '50%',
                    left: '50%',
                    width: '20px',
                    height: '20px',
                    scale: 1,
                    y:0,
                    rotateX: '0'
                });
            });
        });
    });

    $('.tip_close').click(function(){
        $(this).transition({
            rotate: '180deg'
        },300);
        $('body').removeClass('of');
        $('.tip_avatar').transition({ 
            scale: 0.8,            
        },500,'easeOutQuart').transition({ 
            y: -500,
            opacity: 0
        },function(){
            $('.tip_avatar').hide().css({
                scale: 1,
                y: 0
            });
            $('.tip_close').css({
                rotate: '0'
            });
        });
    });

    //timeline action
    $('.info_timeline ul li').mouseenter(function(){
        $(this).addClass('curr');
        $(this).parent().addClass('focus');
        var s_id = $(this).attr('id');
        $('.info_content').addClass('over')
        $('.'+s_id).addClass('curr');
    });
    $('.info_timeline ul li').mouseleave(function(){
        $(this).removeClass('curr');
        $(this).parent().removeClass('focus');
        $('.info_content').removeClass('over')
        $('.info_content .desc').removeClass('curr');
    }); 

    //banner
    $('.carousel').carousel({
        interval: false,
        wrap: true
    });

    //product action
    function open_layout(){
        $('.tip_close').click();
        $('body').addClass('of');
        $('.tip_product').transition({
            top: '0',
            background: '#fff'
        },500,'easeOutQuart',function(){
            $('.tip_area_close').show().transition({
                opacity: 1
            });
        });
    }
    function del_slide(){
        $('.carousel').removeClass('slide');
    }
    function add_slide(){
        $('.carousel').addClass('slide');
    }

    $('.carousel-control,.btn_go,.btn_more').bind('click',function(){
        $('.carousel-inner').scrollTop(0);
    });


    $('.tip_area_close').click(function(){
        $(this).hide().css({
            opacity: 0
        });
        $('.tip_product').transition({
            top: '100%',
            background: 'rgba(255,255,255,0.2)'
        },500,'easeOutQuart',function(){
            $('body').removeClass('of');
        });
    });

    //Scroll
    $('.carousel-inner').scroll(function() {
        scrollPos = $(this).scrollTop();
        $('.logo').css({
            opacity: 1-(scrollPos/300),
            top: 50+(scrollPos/8)+'%'       
        });
        $('.banner_bg').css({
            opacity: 1-(scrollPos/300)
        });
        $('.tip_area_close').css({
            background: 'rgba(0,0,0,'+(scrollPos/300)+')'
        });
    });

    $('.linkedin').click(function(){
        window.open("https://www.linkedin.com/in/vincent-kuo-chun-huang-6ab255146/", "Vincent_Linkedin");
    });
    $('.myWebsite').click(function(){
        window.open("https://vincent0628.github.io/Resume/", "Vincent_Website");
    });
    // $('.gmail').click(function(){
    //     window.open("vincent0910628007@gmail.com", "gmail");
    // });
    
});
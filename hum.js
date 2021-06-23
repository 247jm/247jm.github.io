$(function () {
  $('.menu-trigger').on('click', function () {
    $(this).toggleClass('active');
    return false;
  });
});

//スライダー//
$('.slider').slick({
  autoplay: true,         //自動再生
  autoplaySpeed: 2000,　  //自動再生のスピード
  speed: 800,     　 //スライドするスピード
  dots: true,　　　　　　//スライドしたのドット
  arrows: true,          //左右の矢印
  infinite: true,　　　　//スライドのループ
  pauseOnHover: false,   //ホバーしたときにスライドを一時停止しない　
  centerMode: true,　　//両サイドを表示↓
  centerPadding:"10%",
});


$('.header-nav a[href^="#"]').on('click', function() {
  $('.menu-trigger').click(); // .menuをクリックした時と同じ処理

  // return false; //a要素のリンク先移動防ぐ
});

$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

// Lazy Loadを起動する
// $( function()
// {
// 	$( 'img.lazyload' ).lazyload() ;
// } ) ;


$(function() {
	$("img.lazy").lazyload({   //遅延ロードの対象となる要素を指定
		effect: "fadeIn",   //フィードイン効果
		effectspeed: 1500,   //フィードインの速度をmsで設定できます。
	});
});

$(function(){
  $(window).scroll(function (){
      $('.left-to-right, .down-to-top').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 300){
              $(this).addClass('scrollin');
          }
      });
  });
});

var bw=$(window).width();
var bh=$(window).height();
var halfHeight = bh/2;
var thirdHeight = bh/3;
var content = bh-53;

$(function(){

  $('#wrap').css({height:bh});
  $('.flipbook-viewport').css({height:content});

  $('.job_btn_open').on('click',function(){
    $('.job_btn_open').hide();
    $('.job_btn_close').show();
    $('.job').css({'right':'0'});
  })
  $('.job_btn_close').on('click',function(){
    $('.job_btn_close').hide();
    $('.job_btn_open').show();
    $('.job').css({'right':'-100%'});
  })




});
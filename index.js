jQuery.fn.center = function () {
  this.css("position","absolute");
  this.css("top","-100px"); 
  this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");return this;
}

$(document).ready(function(){
    $('#size-input').center().delay(300).animate({'top' : '0px'});
    });

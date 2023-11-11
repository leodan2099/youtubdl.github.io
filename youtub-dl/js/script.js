$(".click-btn-down").click(function(){
    var link = $(".link").val();
    var formate = $(".formte").children("option:selected").val();
    var src =""+link+"="+formate+"";
    downloadVideo(link,formate);
  });
  function downloadVideo(link,formate) {
      $('.download-video').html('<iframe style="width:100%;height:60px;border:0;overflow:hidden;" scrolling="no" src="https://loader.to/api/button/?url='+link+'&f='+formate+'"></iframe>');
  }
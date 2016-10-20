$(document).ready(function() {
	$(".content").on("click", ".block", function(){
		$(".block-open .view").toggleClass("hide").removeClass("view");
		$(".block-open").toggleClass("block").removeClass("block-open");
		$(this).removeClass("block").addClass("block-open");
		$(".block-open .hide").toggleClass("view").removeClass('hide');
	});
});
$(document).click(function(e){
	var elem = $(".content .block-open");
	if(e.target!=elem[0]&&!elem.has(e.target).length){
		$(".block-open").toggleClass("block").removeClass('block-open');
		$(".block .view").toggleClass("hide").removeClass('view');
	} 
})
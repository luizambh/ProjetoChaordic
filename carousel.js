	$(document).ready(function(){
		$("#conteudo1").css("display", "none");

			$("#puxaDiv1").mouseout(function(event){
	  			event.preventDefault();
				$("#conteudo1").hide("slow");
			});
 
			$("#puxaDiv1").mouseenter(function(event){
				event.preventDefault();
			$("#conteudo1").show(1000);
		});

	});

	$(document).ready(function(){
		$("#conteudo2").css("display", "none");

		$("#puxaDiv2").mouseout(function(event){
	  		event.preventDefault();
			$("#conteudo2").hide("slow");
		});
 
		$("#puxaDiv2").mouseenter(function(event){
			event.preventDefault();
			$("#conteudo2").show(1000);
		});
	});

		$(document).ready(function(){
		$("#conteudo3").css("display", "none");

		$("#puxaDiv3").mouseout(function(event){
	  		event.preventDefault();
			$("#conteudo3").hide("slow");
		});
 
		$("#puxaDiv3").mouseenter(function(event){
			event.preventDefault();
			$("#conteudo3").show(1000);
		});
	});


	$(function() {
		$('.carrosel').jCarouselLite({
			visible : 3,
			speed : 2000,
			btnPrev : '.prev', 
     		btnNext : '.next',
		});
	});

	$(function() {
		$('.carrosel2').jCarouselLite({
			visible : 3,
			speed : 2000,
			btnPrev : '.prev2', 
     		btnNext : '.next2',
		});
	});
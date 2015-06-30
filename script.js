 $(function(){

	var $newItem = $('#new_shopping_item');
	var $itemName = $('#item_name');
	var $list = $('#to_do');
	var $description = $('#description');
	var $completeTask = $("dt");
	var $completeDescription = $("dd");

	// $newItem.submit(function(){

	// });

	$newItem.on('submit', function(event) {
		event.preventDefault();
		$('#to_do').append($("<dt></dt>").text($itemName.val()));
		$('#to_do').append($("<dd></dd>").text($description.val()));
		$("form").trigger("reset");

	});

	// $newItem.on('submit', function(event){
	// 	var taskInput = $.trim($itemName.val());
	// 	if(taskInput === ''){
	// 		alert("Silly you! Forgot a task!");
	// 		event.preventDefault();
	// 		return false;
	// 	};
	// });

	// $newItem.on('submit', function(event){
	// 	var descInput = $.trim($description.val());
	// 	if(descInput === ''){
	// 		alert("Silly you! Forgot a description!");
	// 		event.preventDefault();
	// 		return false;
	// 	};

	// });

 	//Strikes out Task when clicked

	// $("#to_do").on("click","dt",function(event){
	// 	console.log($(this).text());
	// 	$(this).addClass('done');
	// });

 	// deletes when clicked
	$("#to_do").on("click","dt",function(event){
		$(this).fadeOut('slow');
		$(this).empty();
	});

	$('#to_do').on('mouseenter','dt',function(){
		$(this).fadeTo('fast',0.25);
	});

	$('#to_do').on('mouseleave','dt',function(){
		$(this).fadeTo('fast',1);
	});


 	//Strikes out description when clicked

	// $("#to_do").on("click","dd",function(event){
	// 	console.log($(this).text());
	// 	$(this).addClass('done');
	// });

 	// deletes when clicked
 	$("#to_do").on("click","dd",function(event){
		$(this).fadeOut('slow');
		$(this).empty();
	});

	$('#to_do').on('mouseenter','dd',function(){
		$(this).fadeTo('fast',0.25);
	});

	$('#to_do').on('mouseleave','dd',function(){
		$(this).fadeTo('fast',1);
	});

});

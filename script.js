 $(function(){

	var $newItem = $('#new_shopping_item');
	var $itemName = $('#item_name');
	var $list = $('#to_do');
	var $description = $('#description');
	var $completeTask = $("dt");
	var $completeDescription = $("dd");

	// $newItem.submit(function(){

	// });

 	var toDoTemplate = _.template($('#toDo-template').html());

 	var toDo = [
 		{item_name: "Go to gym", description: "Sign up for class on Classpass"},
 		{item_name: "Pack", description: "For the weekend in Carmel"},
 		{item_name: "Shop", description: "For Dinosaur named Fluffy"}
 	];

 	_.each(toDo, function (toDoAdd, index) {
 	  var $toDoAdd = $(toDoTemplate(toDoAdd));
 	  $toDoAdd.attr('data-index', index);
 	  $list.append($toDoAdd);
 	});

	$newItem.on('submit', function(event) {
		event.preventDefault();
		var $newToDo = $(toDoTemplate({item_name:$itemName.val(), description:$description.val()}));
		$list.append($newToDo);
		// $('#to_do').append($("<dt></dt>").text($itemName.val()));
		// $('#to_do').append($("<dd></dd>").text($description.val()));
		$("form").trigger("reset");
		$('#item_name').focus();

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
		$(this).remove();
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
		$(this).remove();
	});

	$('#to_do').on('mouseenter','dd',function(){
		$(this).fadeTo('fast',0.25);
	});

	$('#to_do').on('mouseleave','dd',function(){
		$(this).fadeTo('fast',1);
	});

});

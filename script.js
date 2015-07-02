$(document).ready(function(){

	var ToDo = function (item_name, description){
		this.item_name = item_name;
		this.description = description;
	}

	ToDo.all = []

	ToDo.prototype.save = function(){
		ToDo.all.push(this);
		console.log(ToDo.all);
	}

	ToDo.prototype.render = function(){
		var $list = $('#to_do');
		var $toDo = $(toDoTemplate(this));
		$list.append($toDo);
	}

	
	// var $completeTask = $("dt");
	// var $completeDescription = $("dd");

	var toDoTemplate = _.template($('#toDo-template').html());

	var $newItem = $('#new_shopping_item');
	$newItem.on('submit', function(event) {
		event.preventDefault();
		var $itemName = $('#item_name').val();
		var $description = $('#description').val();
		var toDo = new ToDo($itemName, $description);
		toDo.save();
		toDo.render();
		$("form").trigger("reset");
		$('#item_name').focus();
	});

	$("#to_do").on("click","dt",function(event){
		$(this).fadeOut('slow');
		var index = $(this).attr('data-index');

	$(this).remove();
		$('.todo').each(function(index){
		$(this).attr('data-index', index);
		});
	});

	$('#to_do').on('mouseenter','dt',function(){
		$(this).fadeTo('fast',0.25);
	});

	$('#to_do').on('mouseleave','dt',function(){
		$(this).fadeTo('fast',1);
	});

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
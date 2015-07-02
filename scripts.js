var ToDo = function (title, description){
	this.title = title;
	this.description = description;
	this.all = [];
};

ToDo.prototype.save = function(toDo){
	this.all.push(toDo)
}
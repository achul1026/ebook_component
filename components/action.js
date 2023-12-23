eBookCore.components.action = function(container, data){ // container : DIV
	var addEl = $("<div/>")
		.attr({
			'class'			: 'ebookpagecomp',
			'name'			: data.name,
			'id'				: data.id,
		})
		.css({
			'position'	: 'absolute',
			'visibility'	: 'hidden',
		});
	
	container.append(addEl);
}

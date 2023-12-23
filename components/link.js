eBookCore.components.link = function(container, data){ // container : DIV
	
	//{ type:"link", id:"Link11435050004029", name:"링크1", height:"211", width:"329", y:"130", x:"720", backgroundColor:"0xffffff,0", rolloverColor:"0xffffff,0", borderColor:"0x000000,0", borderWidth:"1", link:"address|_blank|http://www.ebook.co.kr/",  },
	
	// 헥스 컬러값을 RGBA형태로 변환
	var rgbaBgColor			= croTools.hexToRGBA( data.backgroundColor.substr(0,8).replace("0x","#")	, data.backgroundColor.substr(9)	);
	var rgbaBorderColor	= croTools.hexToRGBA( data.borderColor.substr(0,8).replace("0x","#")			, data.borderColor.substr(9)			);
	
	var addEl = $("<div/>")
		.attr({
			'class'			: 'ebookpagecomp',
			'name'			: data.name,
			'id'				: data.id,
		})
		.css({
			'position'					: 'absolute',
			'cursor'						: 'pointer',
			'background-color'	: rgbaBgColor,
			'border-style'			: 'solid' ,       // 2018-11-06 추가 
			'border-color'			: rgbaBorderColor,
			'border-width'			: data.borderWidth +'px',
		});
	
	container.prepend(addEl);
}

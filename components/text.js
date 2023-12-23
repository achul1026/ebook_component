eBookCore.components.text = function(container, data){ // container : DIV
	
	// 헥스 컬러값을 RGBA형태로 변환
	var rgbaTextColor		= croTools.hexToRGBA( data.textColor.substr(0,8).replace("0x","#")				, data.textColor.substr(9)				);
	var rgbaBgColor			= croTools.hexToRGBA( data.backgroundColor.substr(0,8).replace("0x","#")	, data.backgroundColor.substr(9)	);
	var rgbaBorderColor	= croTools.hexToRGBA( data.borderColor.substr(0,8).replace("0x","#")			, data.borderColor.substr(9)			);
	
	var addEl = $("<textarea>"+data.text+"</textarea>")
		.attr({
			'class'			: 'ebookpagecomp',
			'readonly'		: 'readonly',
			'id'				: data.id,
		})
		.css({
			'position'					: 'absolute',
			'cursor'						: 'pointer',
			'overflow'					: 'auto',
			'font-family'				: data.font,
			'letter-spacing'			: data.letterSpacing,
			'text-align'				: data.align,
			'font-style'				: (data.italic==='true' ? 'italic' : 'normal'),
			'font-weight'			: (data.bold==='true' ? 'bold' : 'normal'),
			'text-decoration'		: (data.underline==='true' ? 'underline' : 'none'),
			'color'						: rgbaTextColor,
			'background-color'	: rgbaBgColor,
			'border-color'			: rgbaBorderColor,
			'border-width'			: data.borderWidth +'px',
		});
	
	container.append(addEl);
}

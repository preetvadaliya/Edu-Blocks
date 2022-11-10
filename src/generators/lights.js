Blockly.JavaScript['edu_bot_light'] = function (block) {
	let position = block.getFieldValue('OP0');
	let color = block.getFieldValue('OP1');
	color =
		color === '0'
			? Math.floor(Math.random() * 7 + 1)
					.toString(2)
					.padStart(3, '0')
			: color;
	let code = `2${position}${color}`;
	return code;
};

Blockly.JavaScript['edu_bot_light_off'] = function (block) {
	let position = block.getFieldValue('OP0');
	let code = `2${position}000`;
	return code;
};

Blockly.JavaScript['edu_bot_light_with_time'] = function (block) {
	let position = block.getFieldValue('OP0');
	let color = block.getFieldValue('OP1');
	color =
		color === '0'
			? Math.floor(Math.random() * 7 + 1)
					.toString(2)
					.padStart(3, '0')
			: color;
	let time = block.getFieldValue('OP2');
	let code = `2${position}${color}51${time}2${position}000`;
	return code;
};

Blockly.JavaScript['edu_bot_light_change_with_time'] = function (block) {
	let position = block.getFieldValue('OP0');
	let fromColor = block.getFieldValue('OP1');
	fromColor =
		fromColor === '0'
			? Math.floor(Math.random() * 7 + 1)
					.toString(2)
					.padStart(3, '0')
			: fromColor;
	let toColor = block.getFieldValue('OP2');
	toColor =
		toColor === '0'
			? Math.floor(Math.random() * 7 + 1)
					.toString(2)
					.padStart(3, '0')
			: toColor;
	let time = block.getFieldValue('OP3');
	let code = `2${position}${fromColor}51${time}2${position}${toColor}`;
	return code;
};
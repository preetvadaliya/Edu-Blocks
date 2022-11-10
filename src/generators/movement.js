Blockly.JavaScript['movements_x'] = function (block) {
	var dir = block.getFieldValue('DIR');
	var sec = block.getFieldValue('SEC');
	var speed = block.getFieldValue('SPEED');
	var cordinate = parseInt(sec) * parseInt(speed);
	var code = '11';
	code += dir;
	code += `${cordinate.toString().padStart(3, '0')}`;
	code += '+';
	code += '000';
	code += `${speed.toString().padStart(3, '0')}`;
	return code;
};

Blockly.JavaScript['movement_y'] = function (block) {
	var dir = block.getFieldValue('DIR');
	var speed = block.getFieldValue('SPEED');
	var code = '6';
	code += dir;
	code += speed;
	return code;
};

Blockly.JavaScript['drift'] = function (block) {
	var dir = block.getFieldValue('DIR');
	var speed = block.getFieldValue('SPEED');
	var code = '6';
	code += dir;
	code += speed;
	return code;
};

Blockly.JavaScript['stop'] = function (block) {
	var code = '60200';
	return code;
};

Blockly.JavaScript['rotate'] = function (block) {
	var speed = block.getFieldValue('SPEED');
	var code = '67';
	code += speed;
	return code;
};

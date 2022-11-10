Blockly.JavaScript['clap_detection'] = function (block) {
	var code = '8';
	return code;
};

Blockly.JavaScript['buzzer'] = function (block) {
	var dropdown_op = block.getFieldValue('OP');
	var code = `0${dropdown_op}`;
	return code;
};

Blockly.JavaScript['color_detection'] = function (block) {
	var dropdown_op = block.getFieldValue('OP');
	var code = `72${dropdown_op}`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['distance_detection'] = function (block) {
	var number_distance = block.getFieldValue('distance');
	var distance = String(number_distance);
	var code = `71${distance.padStart(3, '0')}`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

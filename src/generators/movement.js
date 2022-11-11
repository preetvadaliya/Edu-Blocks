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
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['movement_y'] = function (block) {
	var dir = block.getFieldValue('DIR');
	var speed = block.getFieldValue('SPEED');
	var code = '6';
	code += dir;
	code += speed;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['drift'] = function (block) {
	var dir = block.getFieldValue('DIR');
	var speed = block.getFieldValue('SPEED');
	var code = '6';
	code += dir;
	code += speed;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['stop'] = function (block) {
	var code = '60200';
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['rotate'] = function (block) {
	var speed = block.getFieldValue('SPEED');
	var code = '67';
	code += speed;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['angular_movement'] = function (block) {
	let primaryDirection = block.getFieldValue('OP0');
	let angleValue =
		parseInt(block.getFieldValue('INPUT0'), 10) * (Math.PI / 180);
	let secondaryDirection = block.getFieldValue('OP1');
	let time = parseInt(block.getFieldValue('OP2'), 10);
	let speed = parseInt(block.getFieldValue('OP3'), 10);
	let height = speed * time;
	let xCoordinate = height * Math.sin(angleValue);
	let yCoordinate = height * Math.cos(angleValue);
	let directionMap = {
		FL: {
			X: '-',
			Y: '+',
		},
		FR: {
			X: '+',
			Y: '+',
		},
		BL: {
			X: '-',
			Y: '-',
		},
		BR: {
			X: '+',
			Y: '-',
		},
	};
	let code = '11';
	code += `${directionMap[primaryDirection + secondaryDirection]['X']}`;
	code += `${Math.round(xCoordinate).toString().padStart(3, '0')}`;
	code += `${directionMap[primaryDirection + secondaryDirection]['Y']}`;
	code += `${Math.round(yCoordinate).toString().padStart(3, '0')}`;
	code += `${speed.toString().padStart(3, '0')}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['movement_with_stop'] = function (block) {
	var dir = block.getFieldValue('DIR');
	var sec = block.getFieldValue('SEC');
	var speed = block.getFieldValue('SPEED');
	var code = '6';
	code += dir;
	code += speed;
	code += `51${sec}`;
	code += '60200';
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

Blockly.JavaScript['control_loop'] = function (block) {
	let repeatCount = block.getFieldValue('OP');
	let loopBody = Blockly.JavaScript.statementToCode(block, 'DO');
	loopBody = loopBody.trim();
	let length = loopBody.toString().length;
	let code = `4${repeatCount}${length.toString().padStart(2, '0')}${loopBody}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

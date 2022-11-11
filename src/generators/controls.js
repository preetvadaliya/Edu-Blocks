Blockly.JavaScript['control_loop'] = function (block) {
	let repeatCount = block.getFieldValue('OP');
	let loopBody = Blockly.JavaScript.statementToCode(block, 'DO');
	loopBody = loopBody.trim();
	let code = `4${repeatCount}${loopBody.toString().length}${loopBody}`;
	return `${code}${block.getSurroundParent() === null ? '#' : ''}`;
};

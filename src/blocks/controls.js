Blockly.Blocks['control_loop'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('repeat')
			.appendField(
				new Blockly.FieldDropdown([
					['1', '1'],
					['2', '2'],
					['3', '3'],
					['4', '4'],
					['5', '5'],
					['6', '6'],
					['7', '7'],
					['8', '8'],
					['9', '9'],
				]),
				'OP'
			)
			.appendField('times');
		this.appendStatementInput('DO').setCheck(null);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

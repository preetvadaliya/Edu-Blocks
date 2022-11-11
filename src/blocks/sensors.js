Blockly.Blocks['clap_detection'] = {
	init: function () {
		this.appendDummyInput().appendField('on clap detection');
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['buzzer'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('play on buzzer')
			.appendField(
				new Blockly.FieldDropdown([
					['Hello!', '1'],
					['Thank You!', '2'],
					['How are you?', '3'],
				]),
				'OP'
			);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['color_detection'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('color is')
			.appendField(
				new Blockly.FieldDropdown([
					['red', '100'],
					['green', '010'],
					['blue', '001'],
				]),
				'OP'
			);
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['distance_detection'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('distance to obstacles is')
			.appendField(new Blockly.FieldNumber(0, 0, 999), 'distance');
		this.setOutput(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
		this.getField('distance').setValidator(this.validate);
	},
	validate: function (value) {
		return Math.round(value);
	},
};

Blockly.Blocks['wait_until'] = {
	init: function () {
		this.appendValueInput('INPUT0').setCheck(null).appendField('wait until');
		this.appendStatementInput('INPUT1').setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

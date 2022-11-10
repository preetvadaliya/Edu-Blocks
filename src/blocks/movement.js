Blockly.Blocks['movements_x'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('move')
			.appendField(
				new Blockly.FieldDropdown([
					['left', '-'],
					['right', '+'],
				]),
				'DIR'
			)
			.appendField('for')
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
				'SEC'
			)
			.appendField('seconds with')
			.appendField(
				new Blockly.FieldDropdown([
					['1', '65'],
					['2', '70'],
					['3', '75'],
					['4', '80'],
					['5', '85'],
					['6', '90'],
					['7', '95'],
					['8', '100'],
					['9', '105'],
				]),
				'SPEED'
			)
			.appendField('speed');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['movement_y'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('move')
			.appendField(
				new Blockly.FieldDropdown([
					['forward', '1'],
					['backward', '2'],
				]),
				'DIR'
			)
			.appendField('with speed')
			.appendField(
				new Blockly.FieldDropdown([
					['1', '200'],
					['2', '225'],
					['3', '250'],
					['4', '275'],
					['5', '300'],
					['6', '325'],
					['7', '350'],
					['8', '375'],
					['9', '400'],
					['10', '425'],
					['11', '450'],
					['12', '475'],
				]),
				'SPEED'
			);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['drift'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('drift')
			.appendField(
				new Blockly.FieldDropdown([
					['forward right', '3'],
					['forward left', '4'],
					['backward left', '5'],
					['backward right', '6'],
					['left', '8'],
					['right', '9'],
				]),
				'DIR'
			)
			.appendField('with')
			.appendField(
				new Blockly.FieldDropdown([
					['1', '200'],
					['2', '225'],
					['3', '250'],
					['4', '275'],
					['5', '300'],
					['6', '325'],
					['7', '350'],
					['8', '375'],
					['9', '400'],
					['10', '425'],
					['11', '450'],
					['12', '475'],
				]),
				'SPEED'
			)
			.appendField('speed');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['stop'] = {
	init: function () {
		this.appendDummyInput().appendField('stop');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Blocks['rotate'] = {
	init: function () {
		this.appendDummyInput()
			.appendField('rotate above a point with')
			.appendField(
				new Blockly.FieldDropdown([
					['1', '200'],
					['2', '225'],
					['3', '250'],
					['4', '275'],
					['5', '300'],
					['6', '325'],
					['7', '350'],
					['8', '375'],
					['9', '400'],
					['10', '425'],
					['11', '450'],
					['12', '475'],
				]),
				'SPEED'
			)
			.appendField('speed');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

'use strict';

var LEVELS = [{
	/*
	*  I  i  i  i  *
	I  *  * [G] *  I
	i  *  *  *  *  i
	i  *  *  *  *  i
	i  *  P  *  *  i
	*  I  i  i  i  *
	*/
	width: 6,
	height: 6,
	playerSpawn: {
		x: 2,
		y: 4
	},
	goal: {
		x: 3,
		y: 1
	},
	staticBlocks: [],
	tetrominos: [{
		type: 'I',
		orientation: 90,
		x: 1,
		y: 0
	}, {
		type: 'I',
		orientation: 0,
		x: 0,
		y: 1
	}, {
		type: 'I',
		orientation: 0,
		x: 5,
		y: 1
	}, {
		type: 'I',
		orientation: 90,
		x: 1,
		y: 5
	}]
}, {
	/*
	*  *  * [G] *
	*  O  o  *  *
	*  o  o  *  *
	O  o  *  O  o
	o  o  P  o  o
	*/
	width: 5,
	height: 5,
	playerSpawn: {
		x: 2,
		y: 4
	},
	goal: {
		x: 3,
		y: 0
	},
	staticBlocks: [],
	tetrominos: [{
		type: 'O',
		orientation: 0,
		x: 0,
		y: 3
	}, {
		type: 'O',
		orientation: 0,
		x: 3,
		y: 3
	}, {
		type: 'O',
		orientation: 0,
		x: 1,
		y: 1
	}],
}, {
	/*
	*  *  * [G] *  *
	*  B  B  *  *  *
	*  B  B  *  *  *
	O  o  *  O  o  *
	o  o  P  o  o  *
	*/
	width: 6,
	height: 5,
	playerSpawn: {
		x: 2,
		y: 4
	},
	goal: {
		x: 3,
		y: 0
	},
	staticBlocks: [
		{x: 1, y: 1},
		{x: 2, y: 1},
		{x: 1, y: 2},
		{x: 2, y: 2}
	],
	tetrominos: [{
		type: 'O',
		orientation: 0,
		x: 0,
		y: 3
	}, {
		type: 'O',
		orientation: 0,
		x: 3,
		y: 3
	}]
}, {
	/*
	B  B  B  B  *  B  B [G] B
	I  i  i  i     I  i  i  i
	*  *  *  *  I  *  *  *  *
	*  *  *  *  i  *  *  *  *
	*  *  *  *  i  *  *  *  *
	*  *  *  *  i  *  *  *  *
	O  o  O  o  *  O  o  O  o
	o  o  o  o  P  o  o  o  o
	*/
	width: 9,
	height: 8,
	playerSpawn: {
		x: 4,
		y: 7
	},
	goal: {
		x: 7,
		y: 0
	},
	staticBlocks: [
		{x: 0, y: 0},
		{x: 1, y: 0},
		{x: 2, y: 0},
		{x: 3, y: 0},
		{x: 5, y: 0},
		{x: 6, y: 0},
		{x: 8, y: 0}
	],
	tetrominos: [{
		type: 'I',
		orientation: 90,
		x: 0,
		y: 1
	}, {
		type: 'I',
		orientation: 90,
		x: 5,
		y: 1
	}, {
		type: 'I',
		orientation: 0,
		x: 4,
		y: 2
	}, {
		type: 'O',
		orientation: 0,
		x: 0,
		y: 6
	}, {
		type: 'O',
		orientation: 0,
		x: 2,
		y: 6
	}, {
		type: 'O',
		orientation: 0,
		x: 5,
		y: 6
	}, {
		type: 'O',
		orientation: 0,
		x: 7,
		y: 6
	}]
}, {
	/*
	J  j  B [G] B  B
	j  B  *  J  j  j
	j  *  t  *  B  j
	*  t  t  t  *  *
	O  o  *  L  *  *
	o  o  P  l  l  l
	*/
	width: 6,
	height: 6,
	playerSpawn: {
		x: 2,
		y: 5
	},
	goal: {
		x: 3,
		y: 0
	},
	staticBlocks: [
		{x: 2, y: 0},
		{x: 4, y: 0},
		{x: 5, y: 0},
		{x: 1, y: 1},
		{x: 4, y: 2}
	],
	tetrominos: [{
		type: 'J',
		orientation: 180,
		x: 0,
		y: 0
	}, {
		type: 'J',
		orientation: 270,
		x: 3,
		y: 1
	}, {
		type: 'T',
		orientation: 180,
		x: 1,
		y: 2
	}, {
		type: 'O',
		orientation: 0,
		x: 0,
		y: 4
	}, {
		type: 'J',
		orientation: 90,
		x: 3,
		y: 4
	}]
}, {
	/*
	I  i  i  i [G] B  B
	J  j  *  I  i  i  i
	j  *  *  *  L  l  l
	j  T  t  t  *  *  l
	*  *  t  *  *  *  *
	O  o  *  I  i  i  i
	o  o  P  I  i  i  i
	*/
	width: 7,
	height: 7,
	playerSpawn: {
		x: 2,
		y: 6
	},
	goal: {
		x: 4,
		y: 0
	},
	staticBlocks: [
	],
	tetrominos: [{
		type: 'I',
		orientation: 90,
		x: 0,
		y: 0
	}, {
		type: 'J',
		orientation: 180,
		x: 0,
		y: 1
	}, {
		type: 'I',
		orientation: 90,
		x: 3,
		y: 1
	}, {
		type: 'J',
		orientation: 270,
		x: 4,
		y: 2
	}, {
		type: 'T',
		orientation: 0,
		x: 1,
		y: 3
	}, {
		type: 'O',
		orientation: 0,
		x: 0,
		y: 5
	}, {
		type: 'I',
		orientation: 90,
		x: 3,
		y: 5
	}, {
		type: 'I',
		orientation: 90,
		x: 3,
		y: 6
	}]
}, {
	/*
	J  *  *  *  *  O  o [G] O  o  I
	j  j  j  *  *  o  o  B  o  o  i
	*  *  *  *  *  *  *  *  *  *  i
	*  *  *  *  *  *  *  *  *  *  i
	I  *  *  t  *  *  *  *  *  *  *
	i  *  t  t  t  *  *  *  *  O  o
	i  *  *  *  *  *  *  *  *  o  o
	i  *  *  P  *  *  *  *  *  *  B
	*/
	width: 11,
	height: 8,
	playerSpawn: {
		x: 3,
		y: 7
	},
	goal: {
		x: 7,
		y: 0
	},
	staticBlocks: [
		{x: 7, y: 1},
		{x: 10, y: 7}
	],
	tetrominos: [{
		type: 'J',
		orientation: 90,
		x: 0,
		y: 0
	}, {
		type: 'O',
		orientation: 0,
		x: 5,
		y: 0
	}, {
		type: 'O',
		orientation: 0,
		x: 8,
		y: 0
	}, {
		type: 'I',
		orientation: 0,
		x: 10,
		y: 0
	}, {
		type: 'I',
		orientation: 0,
		x: 0,
		y: 4
	}, {
		type: 'T',
		orientation: 180,
		x: 2,
		y: 4
	}, {
		type: 'O',
		orientation: 0,
		x: 9,
		y: 5
	}]
}, {
	/*
	B  B  B  I  i  i  i [G] Z  z  L  l
	I  i  i  i  *  I  i  i  i  z  z  l
	*  O  o  O  o  *  *  *  *  *  *  l
	I  o  o  o  o  *  *  *  *  *  *  *
	i  O  o  *  T  t  t  *  *  *  *  I
	i  o  o  *  *  t  *  *  *  *  *  i
	i  *  *  *  *  *  *  *  *  O  o  i
	B  *  *  P  *  *  *  *  *  o  o  i
	*/
	width: 12,
	height: 8,
	playerSpawn: {
		x: 3,
		y: 7
	},
	goal: {
		x: 7,
		y: 0
	},
	staticBlocks: [
		{x: 0, y: 0},
		{x: 1, y: 0},
		{x: 2, y: 0},
		{x: 0, y: 7}
	],
	tetrominos: [{
		type: 'B',
		orientation: 0,
		x: 0,
		y: 0
	}, {
		type: 'B',
		orientation: 0,
		x: 1,
		y: 0
	}, {
		type: 'B',
		orientation: 0,
		x: 2,
		y: 0
	}, {
		type: 'I',
		orientation: 90,
		x: 3,
		y: 0
	}, {
		type: 'Z',
		orientation: 0,
		x: 8,
		y: 0
	}, {
		type: 'L',
		orientation: 180,
		x: 10,
		y: 0
	}, {
		type: 'I',
		orientation: 90,
		x: 0,
		y: 1
	}, {
		type: 'I',
		orientation: 90,
		x: 5,
		y: 1
	}, {
		type: 'O',
		orientation: 0,
		x: 1,
		y: 2
	}, {
		type: 'O',
		orientation: 0,
		x: 3,
		y: 2
	}, {
		type: 'I',
		orientation: 0,
		x: 0,
		y: 3
	}, {
		type: 'O',
		orientation: 0,
		x: 1,
		y: 4
	}, {
		type: 'T',
		orientation: 0,
		x: 4,
		y: 4
	}, {
		type: 'I',
		orientation: 0,
		x: 11,
		y: 4
	}, {
		type: 'O',
		orientation: 0,
		x: 9,
		y: 6
	}, {
		type: 'B',
		orientation: 0,
		x: 0,
		y: 7
	}]
}];
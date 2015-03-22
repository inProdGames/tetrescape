'use strict';

/**
 * Initialize a new Game.
 * @class
 * @param {HTMLCanvasElement} canvas - The canvas on whch the game will appear
 */
function Game(canvas, level, endCallback) {
	// Initialize private variables.
	this._canvas = canvas;
	this._ctx = canvas.getContext('2d');
	this._im = new InputManager();
	this._endCallback = endCallback;
	// Add placeholders for additional private variables.
	this._grid = undefined;
	this._player = undefined;
	this._goal = undefined;
	this._currentLevel = undefined;
	
	this._boundUpdate = this._update.bind(this);
	
	this.startLevel(level);
}

Game.prototype = {
	/**
	 * The main game loop
	 * @private
	 */
	_update: function () {
		// Clear the screen.
		this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
		
		// Handle player movement.
		var movement;
		if (this._im.left && !this._im.right && !this._im.up && !this._im.down) {
			movement = Vector2D.LEFT;
		} else if (this._im.right && !this._im.left && !this._im.up && !this._im.down) {
			movement = Vector2D.RIGHT;
		} else if (this._im.up && !this._im.left && !this._im.right && !this._im.down) {
			movement = Vector2D.UP;
		} else if (this._im.down && !this._im.left && !this._im.right && !this._im.up) {
			movement = Vector2D.DOWN;
		}
		if (movement) {
			this._player.tryMove(movement);
		}
		
		// Update grid elements.
		this._grid.update();
		
		// Check whether a new row has been formed and eliminate it.
		this._grid.clearRows();
		// Check whether the player has reached the goal.
		if (this._player.x === this._goal.x && this._player.y === this._goal.y) {
			// End the game.
			this._endCallback();
			// End the loop.
			return;
		}
		
		// Draw grid elements.
		this._grid.draw(this._ctx);
		
		requestAnimationFrame(this._boundUpdate);
	},
	
	/**
	 * Initialize and start a level.
	 * @param {Level} level - The level to initialize
	 */
	startLevel: function (level) {
		// TODO: Replace this with proper level loading.
		// Create the grid.
		this._grid = new Grid(level.width, level.height);
		// Create the player.
		this._player = new Player(level.playerSpawn.x, level.playerSpawn.y, this._grid);
		// Create the goal tile.
		this._goal = new Goal(level.goal.x, level.goal.y, this._grid);
		// Create the static blocks.
		level.staticBlocks.forEach(function (block) {
			new StaticBlock(block.x, block.y, this._grid);
		}, this);
		// Create the tetrominos.
		level.tetrominos.forEach(function (tetromino) {
			new Tetromino(Tetromino.BLOCKS[tetromino.type][tetromino.orientation],
				tetromino.x,
				tetromino.y,
				this._grid,
				Tetromino.BLOCKS[tetromino.type].color);
		}, this);
		
		// Start the main game loop.
		this._update();
	}
};
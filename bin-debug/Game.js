var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Game = (function () {
    function Game(root) {
        this._root = root;
        this.createGroupsRect();
        this.createTimer();
        this.startGame();
    }
    Game.prototype.createGroupsRect = function () {
        this._rectRoot = new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._rectGroups = [];
        this._row = Data.getRectRow();
        var groupRect;
        for (var i = 0; i < this._row; i++) {
            groupRect = new GroupRect();
            groupRect.addEventListener("gameOver", this.gameOver, this);
            groupRect.addEventListener("clickRight", this.nextRow, this);
            this._rectGroups.push(groupRect);
            groupRect.y = Data.getRectWidth() * i;
            this._rectRoot.addChild(groupRect);
        }
        this._rectRoot.y = Data.getStage().stageHeight - this._rectRoot.height;
    };
    Game.prototype.nextRow = function () {
        for (var i = 0; i < this._row; i++) {
            this._rectGroups[i].move();
        }
        Data.score++;
    };
    Game.prototype.gameOver = function () {
        this._timePanel.stop();
        if (!this.gameOverPanel) {
            this.gameOverPanel = new GameOverPanel();
            this.gameOverPanel.addEventListener("startGame", this.startGame, this);
        }
        this._root.addChild(this.gameOverPanel);
    };
    Game.prototype.createTimer = function () {
        this._timePanel = new TimerPanel();
        this._timePanel.addEventListener("gameOver", this.gameOver, this);
        this._root.addChild(this._timePanel);
    };
    Game.prototype.startGame = function () {
        Data.score = 0;
        for (var i = 0; i < this._row; i++) {
            this._rectGroups[i].init();
            this._rectGroups[i].y = Data.getRectWidth() * i;
            this._rectGroups[i]._currentRow = i;
            if (i !== this._row - 1) {
                this._rectGroups[i].createBlackRect();
            }
        }
        this._timePanel.start();
    };
    return Game;
}());
__reflect(Game.prototype, "Game");

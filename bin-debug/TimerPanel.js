var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TimerPanel = (function (_super) {
    __extends(TimerPanel, _super);
    function TimerPanel() {
        var _this = _super.call(this) || this;
        _this._num = 20;
        _this._timers = 20;
        _this.draw();
        _this.createTimer();
        return _this;
    }
    TimerPanel.prototype.draw = function () {
        this.txt = new egret.TextField();
        this.txt.width = Data.getStage().stageWidth;
        this.txt.y = 100;
        this.txt.textColor = 0xff0000;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.txt.text = "20'00''";
        this.addChild(this.txt);
    };
    TimerPanel.prototype.createTimer = function () {
        this._timer = new egret.Timer(1000, this._num);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerCom, this);
    };
    TimerPanel.prototype.onTimer = function () {
        this._timers--;
        this.txt.text = this._timers + "'00''";
    };
    TimerPanel.prototype.onTimerCom = function () {
        this.txt.text = "00'00''";
        this.dispatchEventWith("gameOver");
    };
    TimerPanel.prototype.start = function () {
        this.txt.text = "20'00''";
        this._timers = 20;
        this._timer.reset();
        this._timer.start();
    };
    TimerPanel.prototype.stop = function () {
        this._timer.stop();
    };
    return TimerPanel;
}(egret.Sprite));
__reflect(TimerPanel.prototype, "TimerPanel");

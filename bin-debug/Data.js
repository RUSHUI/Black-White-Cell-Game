var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Data = (function () {
    function Data() {
    }
    Data.getRectWidth = function () {
        if (Data._rectWidth === 0) {
            Data._rectWidth = Data.getStage().stageWidth / Data.num;
        }
        return Data._rectWidth;
    };
    Data.getRectRow = function () {
        if (Data._rectRow === 0) {
            Data._rectRow = Math.ceil(Data.getStage().stageHeight / Data.getRectWidth()) + 1;
        }
        return Data._rectRow;
    };
    Data.getStage = function () {
        return egret.MainContext.instance.stage;
    };
    Data.num = 4;
    Data._rectWidth = 0;
    Data.score = 0;
    Data._rectRow = 0;
    return Data;
}());
__reflect(Data.prototype, "Data");

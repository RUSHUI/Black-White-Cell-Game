class Data {

    public static num = 4;
    private static _rectWidth:number = 0;
    public static getRectWidth():number{

        if( Data._rectWidth === 0 ) {
            Data._rectWidth = Data.getStage().stageWidth / Data.num;
        }
        return Data._rectWidth;
    }
    public static score:number = 0;

    private static _rectRow:number = 0;
    public static getRectRow():number {

        if(Data._rectRow === 0) {
            Data._rectRow = Math.ceil( Data.getStage().stageHeight / Data.getRectWidth()) + 1;
        }
        return Data._rectRow;
    }

    public static getStage():any {
        return egret.MainContext.instance.stage;
    }
}
class GroupRect extends egret.Sprite{

    constructor() {
        super();
        this.createRects();
    }

    private _rects:Array<Rect>;

    private createRects() {

        this._rects = [];
        for( let i=0; i < Data.num; i++) {

            let rect:Rect = new Rect();
            this._rects.push( rect );
            rect.x = rect.width * i;
            this.addChild( rect );
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickRect,this);
        }
    }


    public _currentRow:number = 0;


    public onClickRect(evt: egret.TouchEvent) {
        evt.target.onRectClick();
        if( evt.target.type == RectType.NONOCLICKABLE || this._currentRow != Data.getRectRow() - 2) {
            this.dispatchEvent(new egret.Event("gameOver"));
        } else {
            this.dispatchEvent(new egret.Event("clickRight"));
        }
    }

    private _currentBlackRectIndex:number = 0;
    public createBlackRect() {//四个可变位置需要设置黑色方块所以需要四个区间得到四个可变位置的索引值
        this.init();
        let n:number = Math.random();
        if( n >= 0 && n < 0.25 ) {
            this._currentBlackRectIndex = 0;
        } else if( n >= 0.25 && n < 0.5 ) {
            this._currentBlackRectIndex = 1;
        } else if( n >= 0.5 && n < 0.75 ) {
            this._currentBlackRectIndex = 2;
        } else if( n >= .75 && n <= 1){
            this._currentBlackRectIndex = 3;
        }
        this._rects[this._currentBlackRectIndex].type = RectType.CLICKABLE;
    }

    public init() {
        for( let i = 0; i < Data.num; i++) {
            this._rects[i].type = RectType.NONOCLICKABLE;
        }
    }

    public move() {
        this._currentRow++;
        if(this._currentRow == Data.getRectRow()) {
            this._currentRow = 0;
            this.createBlackRect();
        }
        this.y = this._currentRow * Data.getRectWidth();
    }
}

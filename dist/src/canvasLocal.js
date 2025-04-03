export class CanvasLocal {
    constructor(g, canvas) {
        this.graphics = g;
        this.rWidth = 25;
        this.rHeight = 25;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = 0;
        this.centerY = this.maxY;
    }
    iX(x) { return Math.round(this.centerX + x / this.pixelSize); }
    iY(y) { return Math.round(this.centerY - y / this.pixelSize); }
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
    }
    /*fx(x:number):number {
      return Math.sin(x*2.5);
    }*/
    paint() {
        //this.drawLine(-100,0,this.maxX,0);
        this.drawLine(this.iX(0), this.iY(0), this.iX(25), this.iY(0));
        /*this.drawLine(this.iX(0), this.iY(-5), this.iX(0), this.iY(5));
        this.drawLine(this.iX(0), this.iY(0), this.iX(3.14159), this.iY(2));
        */
        let tamX = 25;
        let tamY = 25;
        for (let x = 0; x <= tamX; x++)
            this.drawLine(this.iX(x), this.iY(0), this.iX(x), this.iY(tamX));
        for (let y = 0; y <= tamY; y++)
            this.drawLine(this.iX(0), this.iY(y), this.iX(tamY), this.iY(y));
    }
}

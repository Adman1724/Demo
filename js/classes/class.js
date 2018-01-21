
class ClassObject{
  constructor(){
     this.header = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 100,
    height: 50
    });
    this.body= new fabric.Rect({
      left: 100,
      top: 150,
      fill: 'black',
      width: 100,
      height: 30
    });
     this.metods = new fabric.Rect({
    left: 100,
    top: 180,
    fill: 'red',
    width: 100,
    height: 50
    });

  }
draw(canvas){
   this.group = new fabric.Group([this.header, this.body, this.metods]);
  canvas.add(this.group);
  }


}
var first=new ClassObject();

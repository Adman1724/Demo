
class ClassObject{
  constructor(){
    var header = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 100,
    height: 50
    });
    var body= new fabric.Rect({
      left: 100,
      top: 150,
      fill: 'red',
      width: 100,
      height: 30
    });
    var metods = new fabric.Rect({
    left: 100,
    top: 180,
    fill: 'red',
    width: 100,
    height: 50
    });

  }
draw(canvas){
  var group = new fabric.Group([this.header, this.body, this.metods]);
  canvas.add(group);
  }


}

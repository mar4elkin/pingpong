class screenWorker {
    constructor(height, width) {
        
        height = window.screen.availHeight;
        width = window.screen.availWidth;
        
        this.height = height;
        this.width = width;
    }
    
    getScreen(){
        let screenArr = {
            "height": this.height/2, 
            "width": this.width/2
        };
        return screenArr;
    }
}

class Drawer {
    constructor(canvas, height, width) {

        this.canvas = canvas;
        this.width = width;
        this.height = height;
    }

    canvasInit(){
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    background(){

        let width = this.width;
        let height = this.height;
        var i = 20;

        var ctx = this.canvas.getContext('2d');
        
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);
            ctx.fillRect(25, 25, 100, 100);
            ctx.fillStyle = "white";
            ctx.clearRect(width/2, 0, 4, height);
            ctx.strokeRect(55, 56, 55, 55);
        
        this.eventsLister(ctx, i);

    }


   eventsLister(ctx, i){


        document.addEventListener("keydown", function(event) {

            if (event.which == 40){ //38
                //console.log('down');
                
                //Я тут не для того чтобы баги жса фиксить is not a function type error коннечно

                    ctx.fillStyle = "black";
                    ctx.fillRect(0, 0, width, height);
                    ctx.fillRect(25, 25, 100, 100);
                    ctx.fillStyle = "white";
                    ctx.clearRect(width/2, 0, 4, height);
                    ctx.strokeRect(55, 56, 55, 55);
                
                console.log(i);
                
                if (i != 420){
                    i = i + 20;
                }

                ctx.clearRect(10, i, 5, 100);
                
            }

            if (event.which == 38){ //38
                //console.log('up');
                
                    ctx.fillStyle = "black";
                    ctx.fillRect(0, 0, width, height);
                    ctx.fillRect(25, 25, 100, 100);
                    ctx.fillStyle = "white";
                    ctx.clearRect(width/2, 0, 4, height);
                    ctx.strokeRect(55, 56, 55, 55);

                console.log(i);

                if (i != 20){
                    i = i - 20;
                }

                ctx.clearRect(10, i, 5, 100);
            }
          
        })

   } 

}

class PingPongBot {
    constructor() {

    }
}

var canvas = document.getElementsByTagName('canvas')[0];

var stickOne = document.getElementsByTagName('canvas')[1];

const srw = new screenWorker();

var height = srw.getScreen().height;
var width = srw.getScreen().width;

const drw = new Drawer(canvas, height, width);

drw.canvasInit();
drw.background();




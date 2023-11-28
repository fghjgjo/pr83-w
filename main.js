var last_x, last_y;
var width=screen.width;
var height=screen.height;
new_width=screen.width-70;
new_height=screen.height-300;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "pink";
    width_of_line = 2;


    if(width< 992){
        document.getElementById("myCanvas").width=new_width ;
        document.getElementById("myCanvas").height=new_height ;
        document.body.style.overflow="hidden";
    }


    canvas.addEventListener("touchStart", my_touchStart);
    
    function my_touchStart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        last_x=e.touches[0].clientX-canvas.offsetLeft;
        last_y=e.touches[0].clientY-canvas.offsetTop;

    }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of  x and y coordinates = ");
        console.log("x = " + last_x + "y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        
        last_x = current_position_of_touch_x; 
        last_y = current_position_of_touch_y;
    }
    function clearArea(){
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    }


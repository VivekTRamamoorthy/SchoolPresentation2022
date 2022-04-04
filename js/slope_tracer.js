





var slopeTracerFunctionCanvas=document.getElementById("slope-tracer-function-canvas");
var slopeTracerDerivativeCanvas=document.getElementById("slope-tracer-derivative-canvas");

let fun = x=> pow(x,2);
let derivative = x=>x*2;
let prob = "y=x"
let derivativeString = "y=1"
var functionPlotHandle, derivativePlotHandle
var xlimits=[0,1], ylimits=[0,1]

slopeTracerProblem()

function slopeTracerProblem(prob="y=x"){
    switch (prob) {
        case "y=x":
        fun = x=> x;
        derivative = x=>1;
        derivativeString = "y=1";
        xlimits=[-10,10]
        ylimits=[-10,10]
        break;
        
        case "y=x^2":
        fun = x=> x**2;
        derivative = x=>2*x;
        derivativeString = "y=2x"
        xlimits=[-4,4]
        ylimits=[-1,17]
        break;
        
        case "y=cosx":
        fun = x=> Math.cos(x);
        derivative = x=>Math.sin(x);
        derivativeString = "y=sin(x)"
        xlimits=[-Math.PI,Math.PI]
        ylimits=[-1.5,1.5]
        break;
        
        
        default:
        break;
    }
    slope_tracer_setup()
    
}

function slope_tracer_setup(){
    let x = range(xlimits[0],.1,xlimits[1]);
    let y = map(fun,x);
    functionPlotHandle = figure("slope-tracer-function-canvas")
    plot(x,y,'padding',30,'xlabel','','ylabel','','title','y=x^2')
    let dydx = map(derivative,x);
    derivativePlotHandle = figure("slope-tracer-derivative-canvas")
    plot(x,dydx,'axis','fixed','xlim',xlimits,'ylim',ylimits,'padding',40,'xlabel','','ylabel','','title',derivativeString)
}



var mouse={x:0,y:0}

var deltaX = 1;



function slopeTracerCanvasUpdate(){
    slopeTracerFunctionCanvas.width = slopeTracerFunctionCanvas.clientWidth;
    slopeTracerFunctionCanvas.height = slopeTracerFunctionCanvas.clientHeight;
    
    // update function plot and slope line
    functionPlotHandle.drawLines()
    let ptx = functionPlotHandle.pxToX(mouse.x)
    let pty = map(fun,ptx)
    let pty1 = map(fun,ptx-deltaX)
    let pty2 = map(fun,ptx+deltaX)
    functionPlotHandle.drawPoint(ptx,pty,5,"#f00") // draw mouse point
    functionPlotHandle.drawLine({x:[ptx-deltaX,ptx+deltaX, ptx+deltaX],y:[pty1,pty1,pty2],color:"#f00"})
    functionPlotHandle.clearPadding()
    functionPlotHandle.drawAxes()
    
    
    // update derivative plot and height line
    
    let ptdydx = map(derivative,ptx);
    derivativePlotHandle.draw()
    derivativePlotHandle.drawPoint(ptx,ptdydx,5,"#f00") // draw mouse point
    derivativePlotHandle.drawLine({x:[ptx,ptx],y:[0,ptdydx],color:"#f00"}) // draw mouse point
    derivativePlotHandle.drawLine({x:[-10,10],y:[0,0],color:"#000"}) // draw mouse point
    
}
// slopeTracerCanvasUpdate()


slopeTracerFunctionCanvas.addEventListener("mousemove",(event)=>{
    const rect = slopeTracerFunctionCanvas.getBoundingClientRect()
    mouse.x=event.clientX - rect.left;
    mouse.y=event.clientY - rect.top;
    // console.log(event)
    slopeTracerCanvasUpdate()
})







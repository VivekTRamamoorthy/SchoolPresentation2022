





const slopeTracerFunctionCanvas=document.getElementById("slope-tracer-function-canvas");
const slopeTracerDerivativeCanvas=document.getElementById("slope-tracer-derivative-canvas");

let fun = x=> x;
let derivative = x=>0*x+1;

let x = linspace(-10,10);
let y = map(fun,x);
let functionPlotHandle = figure("slope-tracer-function-canvas")
plot(x,y)
let dydx = map(derivative,x);
let derivativePlotHandle = figure("slope-tracer-derivative-canvas")
plot(x,dydx,'axis','fixed','xlim',[-10,10],'ylim',[0,3])



var mouse={x:0,y:0}

function slopeTracerCanvasUpdate(){
    slopeTracerFunctionCanvas.width = slopeTracerFunctionCanvas.clientWidth;
    slopeTracerFunctionCanvas.height = slopeTracerFunctionCanvas.clientHeight;

    console.log("Slope tracer canvas update")
    // First plot
    let plotWidth = slopeTracerFunctionCanvas.width 
    let plotHeight = slopeTracerFunctionCanvas.height
    



    functionPlotHandle.draw()
    console.log(mouse)
    console.log(functionPlotHandle.pxToX(mouse.x),functionPlotHandle.pxToY(map(fun,mouse.x)));
    functionPlotHandle.drawPoint(functionPlotHandle.pxToX(mouse.x),map(fun,functionPlotHandle.pxToX(mouse.x)),5,"#f00")
    functionPlotHandle.clearPadding()
    functionPlotHandle.drawAxes()


    // draw tangent in Funciton plot
    // draw circle in Function plot

    // draw height line in derivative plot
    // draw height point in derivative plot




}
slopeTracerCanvasUpdate()


slopeTracerFunctionCanvas.addEventListener("mousemove",(event)=>{
    const rect = slopeTracerFunctionCanvas.getBoundingClientRect()
    mouse.x=event.clientX - rect.left;
    mouse.y=event.clientY - rect.top;
    // console.log(event)
    slopeTracerCanvasUpdate()
})







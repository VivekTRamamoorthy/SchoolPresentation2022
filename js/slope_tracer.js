





const slopeTracerFunctionCanvas=document.getElementById("slope-tracer-function-canvas");
const slopeTracerDerivativeCanvas=document.getElementById("slope-tracer-derivative-canvas");

let fun = x=> pow(x,2);
let derivative = x=>x*2;

let x = range(-10,.1,10);
let y = map(fun,x);
let functionPlotHandle = figure("slope-tracer-function-canvas")
plot(x,y,'padding',30,'xlabel','','ylabel','','title','y=x^2')
let dydx = map(derivative,x);
let derivativePlotHandle = figure("slope-tracer-derivative-canvas")
plot(x,dydx,'axis','fixed','xlim',[-10,10],'ylim',[-20,20],'padding',40,'xlabel','','ylabel','','title','dy/dx=2x')



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







const graphCanvas = document.getElementById("graphs")




var graphFunction = x=>1

function plotFunction(fun){

    graphCanvas.width = graphCanvas.clientWidth;
    graphCanvas.height = graphCanvas.clientHeight;
    let x = linspace(-10,10,200);
    let y=map(fun,x);
    figure("graphs")
    plot(x,y,'axis','fixed','xlim',[-10,10],'ylim',[-10,10])

}
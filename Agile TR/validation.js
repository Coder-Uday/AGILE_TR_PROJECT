function display()
{
var chartdata=[];
var a1=document.getElementById("category");
var a2=document.getElementById("product");
var a3=document.getElementById("brand");
if(a1.options[a1.selectedIndex].value==1 && a2.options[a2.selectedIndex].value==1 && a3.options[a3.selectedIndex].value==1)
{
    for(var i=0;i<4;i++)
    {
        var mydata=i*30;
        chartdata.push(mydata);
    }
}
else if(a1.options[a1.selectedIndex].value==1 && a2.options[a2.selectedIndex].value==1 && a3.options[a3.selectedIndex].value==2)
{
    for(var i=0;i<4;i++)
    {
        var mydata=30/i;
        chartdata.push(mydata);
    }
}
else if(a1.options[a1.selectedIndex].value==1 && a2.options[a2.selectedIndex].value==2 && a3.options[a3.selectedIndex].value==1)
{
    for(var i=0;i<4;i++)
    {
        var mydata=(i%2)*30;
        chartdata.push(mydata);
    }
}
else if(a1.options[a1.selectedIndex].value==1 && a2.options[a2.selectedIndex].value==2 && a3.options[a3.selectedIndex].value==2)
{
    for(var i=0;i<4;i++)
    {
        var mydata=(4-i%2+1)*30;
        chartdata.push(mydata);
    }
}
else if(a1.options[a1.selectedIndex].value==2 && a2.options[a2.selectedIndex].value==1 && a3.options[a3.selectedIndex].value==1)
{
    for(var i=0;i<4;i++)
    {
        var mydata=(4-i)*30;
        chartdata.push(mydata);
    }
}
else if(a1.options[a1.selectedIndex].value==2 && a2.options[a2.selectedIndex].value==1 && a3.options[a3.selectedIndex].value==2)
{
    for(var i=0;i<4;i++)
    {
        var mydata=5*(30/i);
        chartdata.push(mydata);
    }
}
else if(a1.options[a1.selectedIndex].value==2 && a2.options[a2.selectedIndex].value==2 && a3.options[a3.selectedIndex].value==1)
{
    for(var i=0;i<4;i++)
    {
        var mydata=((i+1)%2)*30;
        chartdata.push(mydata);
    }
}
else if(a1.options[a1.selectedIndex].value==2 && a2.options[a2.selectedIndex].value==2 && a3.options[a3.selectedIndex].value==2)
{
    for(var i=0;i<4;i++)
    {
        var mydata=(i%2+1)*30;
        chartdata.push(mydata);
    }
}
if(document.getElementById("bar")!=null)
document.getElementById("bar").innerHTML = '';
d3.select("body").selectAll("graph")
.data(chartdata)
.enter()
.append("div")
.attr("class","bar")
.style("height", function(d){
    return d + "px";
})
return false;
}


//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":bubbledesc(); Bubble();
                        break;
        case "Selection": selectiondesc();Selection_sort();
                        break;
        case "Insertion": insertiondesc();Insertion();
                        break;
        case "Merge": mergedesc();Merge();
                        break; 
        case "Quick":quickdesc();Quick();
                        break;
        case "Heap":heapdesc();Heap();
                        break;
    }
}

function bubbledesc(){

    document.getElementById("Info_Cont1").innerHTML = "<b>Time Complexity of bubble sort <br><br> <p>Best Case= O(N)</p> <br> <p>Average Case = O(N^2)</p> <br> <p> Worst Case = o(N^2) </p></b>";
}
function selectiondesc(){

    document.getElementById("Info_Cont1").innerHTML = "<b>Time Complexity of selection sort <br><br> <p>Best Case= O(N^2)</p> <br> <p>Average Case = O(N^2)</p> <br> <p> Worst Case = o(N^2) </p></b>";
}
function insertiondesc(){

    document.getElementById("Info_Cont1").innerHTML = "<b>Time Complexity of insertion sort <br><br> <p>Best Case= O(N)</p> <br> <p>Average Case = O(N^2)</p> <br> <p> Worst Case = o(N^2) </p></b>";
}
function mergedesc(){

    document.getElementById("Info_Cont1").innerHTML = "<b>Time Complexity of merge sort <br><br> <p>Best Case= O(NLogN)</p> <br> <p>Average Case = O(NLogN)</p> <br> <p> Worst Case = o(NLogN) </p></b>";
}
function quickdesc(){

    document.getElementById("Info_Cont1").innerHTML = "<b>Time Complexity of quick sort <br><br> <p>Best Case= O(NLogN)</p> <br> <p>Average Case = O(NLogN)</p> <br> <p> Worst Case = o(N^2) </p></b>";
}
function heapdesc(){

    document.getElementById("Info_Cont1").innerHTML = "<b>Time Complexity of heap sort <br><br> <p>Best Case= O(NLogN)</p> <br> <p>Average Case = O(NLogN)</p> <br> <p> Worst Case = o(NLogN) </p></b>";
}



function search(){
    var input, filtter, ul, li, a, i;
    input = document.getElementById("inpttxt");
    filtter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");

    for(i =0; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filtter) > -1){
            li[i].style.display ="";

        }
        else{
            li[i].style.display = 'none';
        }
    }


}
//1

function show1(){
    console.log("show1 called");
    document.getElementById("banner").innerHTML = "^ Phone No. - ^";
    document.getElementById("phoneInfo1").innerHTML = "Number 1 <br>";
    document.getElementById("phoneInfo1").href = "tel:+880194433322";
    document.getElementById("phoneInfo2").innerHTML = "Number 2 <br>";
    document.getElementById("phoneInfo2").href = "tel:+8801937110011";
    document.getElementById("phoneInfo3").innerHTML = "Number 3 ";
    document.getElementById("phoneInfo3").href = "tel:+8801927711784";
}

function close1(){
    console.log("close1 called");
    document.getElementById("banner").innerHTML = "";
    document.getElementById("phoneInfo1").innerHTML = "";
    document.getElementById("phoneInfo1").href = "";
    document.getElementById("phoneInfo2").innerHTML = "";
    document.getElementById("phoneInfo2").href = "";
    document.getElementById("phoneInfo3").innerHTML = "";
    document.getElementById("phoneInfo3").href = "";
}

//2

function show2(){
    console.log("show2 called");
    document.getElementById("banner2").innerHTML = "^ Phone No. - ^";
    document.getElementById("no1").innerHTML = "No Phone No.";
}

function close2(){
    console.log("close2 called");
    document.getElementById("banner2").innerHTML = "";
    document.getElementById("no1").innerHTML = "";
}

//3
function show3(){
    console.log("show2 called");
    document.getElementById("banner3").innerHTML = "^ Phone No. - ^";
    document.getElementById("phoneInfo13").innerHTML = "Number 1 ";
    document.getElementById("phoneInfo13").href = "tel:+88029128308";
}

function close3(){
    console.log("close2 called");
    document.getElementById("banner3").innerHTML = "";
    document.getElementById("phoneInfo13").innerHTML = "";
    document.getElementById("phoneInfo13").href = "";
}
//4
function show4(){
    console.log("show2 called");
    document.getElementById("banner4").innerHTML = "^ Phone No. - ^";
    document.getElementById("phoneInfo14").innerHTML = "Number 1 <br>";
    document.getElementById("phoneInfo14").href = "tel:+880255165088";
    document.getElementById("phoneInfo24").innerHTML = "Number 2 ";
    document.getElementById("phoneInfo24").href = "tel:+880255165001";
}

function close4(){
    console.log("close2 called");
    document.getElementById("banner4").innerHTML = "";
    document.getElementById("phoneInfo14").innerHTML = "";
    document.getElementById("phoneInfo14").href = "";
    document.getElementById("phoneInfo24").innerHTML = "";
    document.getElementById("phoneInfo24").href = "";
}
//5
function show5(){
    console.log("show2 called");
    document.getElementById("banner5").innerHTML = "^ Phone No. - ^";
    document.getElementById("phoneInfo15").innerHTML = "Number 1 <br>";
    document.getElementById("phoneInfo15").href = "tel:+88027315076";
    document.getElementById("phoneInfo25").innerHTML = "Number 2 <br>";
    document.getElementById("phoneInfo25").href = "tel:+8801622897441";
}

function close5(){
    console.log("close2 called");
    document.getElementById("banner5").innerHTML = "";
    document.getElementById("phoneInfo15").innerHTML = "";
    document.getElementById("phoneInfo15").href = "";
    document.getElementById("phoneInfo25").innerHTML = "";
    document.getElementById("phoneInfo25").href = "";
}

//6
function show6(){
    console.log("show6 called");
    document.getElementById("banner6").innerHTML = "^ Phone No. - ^";
    document.getElementById("phoneInfo16").innerHTML = "Number 1 ";
    document.getElementById("phoneInfo16").href = "tel:+8801999956290";
}

function close6(){
    console.log("close6 called");
    document.getElementById("banner6").innerHTML = "";
    document.getElementById("phoneInfo16").innerHTML = "";
    document.getElementById("phoneInfo16").href = "";
}

//7

function show7(){
    console.log("show7 called");
    document.getElementById("banner7").innerHTML = "^ Phone No. - ^";
    document.getElementById("phoneInfo17").innerHTML = "Number 1 <br>";
    document.getElementById("phoneInfo17").href = "tel:+880312780426";
    document.getElementById("phoneInfo27").innerHTML = "Number 2 <br>";
    document.getElementById("phoneInfo27").href = "tel:+880312781266";
}

function close7(){
    console.log("close7 called");
    document.getElementById("banner7").innerHTML = "";
    document.getElementById("phoneInfo17").innerHTML = "";
    document.getElementById("phoneInfo17").href = "";
    document.getElementById("phoneInfo27").innerHTML = "";
    document.getElementById("phoneInfo27").href = "";
}

//8 

function show8(){
    console.log("show8 called");
    document.getElementById("banner8").innerHTML = "^ Phone No. - ^";
    document.getElementById("phoneInfo18").innerHTML = "Number 1 ";
    document.getElementById("phoneInfo18").href = "tel:+8801712852706";
}

function close8(){
    console.log("close8 called");
    document.getElementById("banner8").innerHTML = "";
    document.getElementById("phoneInfo18").innerHTML = "";
    document.getElementById("phoneInfo18").href = "";
}

//9

function show9(){
    console.log("show9 called");
    document.getElementById("banner9").innerHTML = "^ Phone No. - ^";
    document.getElementById("phoneInfo19").innerHTML = "Number 1 <br>";
    document.getElementById("phoneInfo19").href = "tel:+8801768027115";
    document.getElementById("phoneInfo29").innerHTML = "Number 2 <br>";
    document.getElementById("phoneInfo29").href = "tel:+8809166063";
}

function close9(){
    console.log("close9 called");
    document.getElementById("banner9").innerHTML = "";
    document.getElementById("phoneInfo19").innerHTML = "";
    document.getElementById("phoneInfo19").href = "";
    document.getElementById("phoneInfo29").innerHTML = "";
    document.getElementById("phoneInfo29").href = "";
}
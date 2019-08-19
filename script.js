
findYear(); 

function findYear(){
     console.log("ha")
    // alert("haha")


}




function calculate(){
    var number = document.getElementById("number").value;
    if(number ==""){
        window.alert("Please type a vaild age!");
        console.log("clicked");
    }
    var date = new Date().getFullYear();
    var birthYear = number - date;

    document.getElementById("year").style.display = "block";
    document.getElementById("year").innerHTML = "your birth year is";
}

// calculate() = document.getElementById("button").onClick;
    


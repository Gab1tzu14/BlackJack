    if(localStorage.getItem("Credits")){
        document.getElementById("continue-btn").style.display = "inline"
}
function continuegm(){
    window.location.href = "Game.html"
}
function deposit(){
    let Credits = document.getElementById("credits").value
    if(Credits == ""){
        alert("please set a value to deposit!")
    }
    else{
    if(parseInt(Credits) == Credits){
        localStorage.setItem("Credits", Credits)

        if(localStorage.getItem("deposit test") != "1"){
            localStorage.setItem("deposit test", "1")
            window.location.href = "Deposit.html"}
        else{
            window.location.href = "Game.html"
        }
    }
    else{
            alert("Don't type characters in deposit amount, just numbers, ex: 100")
        }
    }
}

let alive = false
let bj = false
let dealerace1 = false
let dealerace2 = false
let playerace = false
let aceverf = 0;
let player = {
    cards:[],
    sum: 0
}
let dealer = {
    cards:[],
    sum: 0
}
function gencard(){
    let rangen = Math.floor(Math.random() * 13) + 1
    if (rangen > 10)
        return 10
    else
    return rangen
}
function newgame(){
    if(alive === false || bj === true){
    document.getElementById('hit-bu').style.display = "inline"
    document.getElementById('stand-bu').style.display = "inline"
    document.getElementById('newgame-bu').style.display = "none"
    alive = true
    bj = false
    dealerace1 = false
    dealerace2 = false
    playerace = false
    player.cards.length = 0
    dealer.cards.length = 0
    document.getElementById('dealer-cards').textContent = ""
    dealer.cards.push(gencard())
    dealer.cards.push(gencard())
    if(dealer.cards[0] === 1 && dealer.cards[1] > 1){
        dealer.sum = 11 + dealer.cards[1]
        dealerace1 = true
    }
    else
    if(dealer.cards[1] === 1 && dealer.cards[0] > 1){
        dealer.sum = 11 + dealer.cards[0]
        dealerace2 = true
    }
    else if(dealer.cards[1] === 1 && dealer.cards[0] === 1){
        dealer.sum = 11 + 1
        dealerace2 = true
    }
    else{
    dealer.sum = dealer.cards[0] + dealer.cards[1]}
    player.cards.push(gencard())
    player.cards.push(gencard())
    if(player.cards[0] === 1 && player.cards[1] > 1){
        player.sum = 11 + player.cards[1]
        playerace = true
    }
    else
    if(player.cards[1] === 1 && player.cards[0] > 1){
        player.sum = 11 + player.cards[0]
        playerace = true
    }
    else if(player.cards[1] === 1 && player.cards[0] === 1){
        player.sum = 11 + 1
        playerace = true
    }
    else{
    player.sum = player.cards[0] + player.cards[1]}
    document.getElementById('dealer-cards').textContent ="Dealer's cards: " + "?" +" "+ dealer.cards[1]
    if(dealerace2 === true){
    document.getElementById('dealer-sum').textContent = "Dealer's sum: "
    document.getElementById('dealer-sum').textContent += 1
    document.getElementById('dealer-sum').textContent += "/"
    document.getElementById('dealer-sum').textContent += 11
    }
    else{
    document.getElementById('dealer-sum').textContent = "Dealer's sum: "
    document.getElementById('dealer-sum').textContent += dealer.cards[1]}
    document.getElementById('player-cards').textContent ="Your cards: " + player.cards[0] +" "+ player.cards[1]
    if(playerace === true){
        document.getElementById('player-sum').textContent = "Your sum: "
        document.getElementById('player-sum').textContent += player.sum - 10
        document.getElementById('player-sum').textContent += "/"
        document.getElementById('player-sum').textContent += player.sum
        }
        else{
    document.getElementById('player-cards').textContent = "Your cards: "+player.cards[0] +" "+ player.cards[1]
    document.getElementById('player-sum').textContent = "Your sum: "+ player.sum}
    rendergame()}
}
function rendergame(){
    if(player.sum <21)
        document.getElementById('text').textContent = 'Would you like to hit?'
    else
    if(player.sum > 21){
        document.getElementById('text').textContent = 'You lost, click "NEW GAME" to start a new game'
        alive = false
        document.getElementById('hit-bu').style.display = "none"
            document.getElementById('stand-bu').style.display = "none"
            document.getElementById('newgame-bu').style.display = "inline"
    }
    else{
        document.getElementById('text').textContent = 'YOU GOT A BLACKJACK!'
        document.getElementById('player-sum').textContent = 21
        bj = true
        stand()
    }
}
function hit(){
    if(alive && bj === false){
    let newcard = gencard()
    if(playerace === true && player.sum + newcard >21){
        playerace = false
        player.sum -= 10
        player.sum += newcard
    }
    else
    if(newcard ===1 && player.sum + 11 <=21){
        playerace = true
        player.sum +=11
        player.cards.push(newcard)
    }
    else{
    player.cards.push(newcard)
    player.sum += newcard}
    if(playerace === false){
    document.getElementById('player-cards').textContent += " " +newcard
    document.getElementById('player-sum').textContent = "Your sum: "+ player.sum}
    else
    {
        document.getElementById('player-cards').textContent += " " +newcard
        document.getElementById('player-sum').textContent = "Your sum: "
        document.getElementById('player-sum').textContent += player.sum - 10
        document.getElementById('player-sum').textContent += "/"
        document.getElementById('player-sum').textContent += player.sum
    }
    rendergame()
}
}
function stand(){
    if(alive === true){
        alive = false
        document.getElementById('dealer-cards').textContent ="Dealer's cards: " + dealer.cards[0] +" "+ dealer.cards[1]
        document.getElementById('dealer-sum').textContent = "Dealer's sum "+ dealer.sum
        if(dealer.sum > player.sum)
            document.getElementById('text').textContent = 'You lost, click "NEW GAME" to start a new game'
        while(dealer.sum < player.sum){
            let newcard = gencard()
            if((dealerace1 === true|| dealerace2 === true) && dealer.sum + newcard >21){
                dealerace1 = false
                dealerace2 = false
                dealer.sum -= 10
                dealer.sum += newcard
            }
               else{
            dealer.cards.push(newcard)
            dealer.sum += newcard
            player.cards.remove}
            document.getElementById('dealer-cards').textContent += " " +newcard
            document.getElementById('dealer-sum').textContent = "Dealer's sum "+ dealer.sum
        }
        if(dealer.sum === player.sum)
            document.getElementById('text').textContent = "IT'S EQUAL!"
        else
        if((dealer.sum > player.sum) && dealer.sum <=21)
            document.getElementById('text').textContent = 'You lost, click "NEW GAME" to start a new game'
        else
            document.getElementById('text').textContent = 'You  WON, click "NEW GAME" to start a new game'
            document.getElementById('hit-bu').style.display = "none"
            document.getElementById('stand-bu').style.display = "none"
            document.getElementById('newgame-bu').style.display = "inline"

    }
}
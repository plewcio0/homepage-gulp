"use strict";

import moment from 'moment';

const buttonSwitcher = document.querySelector('.navigation__switcher--js');
const nav = document.querySelector('.navbar__list');
buttonSwitcher.addEventListener('click',() => {
    nav.classList.toggle('navbar__list--visible');
    nav.classList.contains('navbar__list--visible') ? buttonSwitcher.innerHTML = 'X' : buttonSwitcher.innerHTML = '&#9776;';
})

const paper = document.querySelector('.game__paper');
const rock = document.querySelector('.game__rock');
const scissors = document.querySelector('.game__scissors');
const winner = document.querySelector('.winner');
const score = document.querySelector('.score');
const scoreboard = {
    player: 0,
    computer: 0
}

paper.addEventListener('click',function(e) {
    var compMove = simulateMove();
    var winnerx = compute(e.target.id,compMove);
    winner.innerHTML = winnerx;
    controlScore(winnerx);
    console.log(`komputer: ${compMove}`);
})
rock.addEventListener('click',function(e) {
    var compMove = simulateMove();
    var winnerx = compute(e.target.id,compMove);
    winner.innerHTML = winnerx;
    controlScore(winnerx);
    console.log(`komputer: ${compMove}`);
})

scissors.addEventListener('click',function(e) {
    var compMove = simulateMove();
    var winnerx = compute(e.target.id,compMove);
    winner.innerHTML = winnerx;
    controlScore(winnerx);
    console.log(`komputer: ${compMove}`);
})

function simulateMove()
{
    let number = Math.random();
    if (number < 0.33)
    return 'kamien'
    else if (number >= 0.33 && number <= 0.66)
    return 'nozyce'
    else
    return 'papier'
}

function compute(player, computer) {
    if (player === 'papier')
        if (computer === 'papier')
        return 'remis'
        else if (computer === 'kamien')
        return 'player'
        else
        return 'computer'
    else if (player === 'kamien')
        if (computer === 'kamien')
        return 'remis'
        else if (computer === 'nozyce')
        return 'player'
        else 
        return 'computer'
    else
        if (computer === 'nozyce')
        return 'remis'
        else if (computer === 'kamien')
        return 'computer'
        else
        return 'player'
}
function controlScore(winner){
    if (winner === 'computer')
        {scoreboard.computer++;score.innerHTML = `Computer: ${scoreboard.computer} - Player: ${scoreboard.player}`;}
    else if (winner === 'player')
    {scoreboard.player++;score.innerHTML = `Computer: ${scoreboard.computer} - Player: ${scoreboard.player}`;}
    else
        {console.log('remis');score.innerHTML = `Computer: ${scoreboard.computer} - Player: ${scoreboard.player}`;}
        localStorage.setItem("wynik",JSON.stringify(scoreboard));
    }




if (localStorage.length != 0) {
    const d = document.querySelector('.lastWin');
    const obj = JSON.parse(localStorage.getItem('wynik'));
    console.log(obj);
    d.innerHTML = `Poprzedni wynik: ${Object.keys(obj)[1]} ${obj.computer} - ${Object.keys(obj)[0]} ${obj.player}`;

}
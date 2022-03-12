'use strict';

function player(name, table) {
    this.name = name;
    this.table = table;
}

function table(tablenum, randocol, players) {
    this.tablenum = tablenum;
    this.randocol = randocol;
    this.players = players;
}

let tnum = 0;
let pnum = 0;

function buildtable() {

    tnum++;

    let newtable = new table(tnum, 'rgb('+Math.round((Math.random()*150)+155)+', '+Math.round((Math.random()*150)+155)+', '+Math.round((Math.random()*150)+155)+')');

    console.log(newtable);

    const tableparent = document.getElementById('tables');
    
    $(tableparent).append(
        $('<div>')
            .attr('id', 'table' + tnum)
            .css('background-color', newtable.randocol)
            .addClass('grouptable')
            .html('TABLE #' + tnum)
    )
};

function addplayerfunc(pname, table) {
    console.log(pname, table);
    pnum++;
    table.append(
        $('<div>')
        .addClass('playertile')
        .text(pname)
    )
}

const addtable = document.getElementById('addtable');
addtable.addEventListener('click', function () {
    buildtable();
})

const addplayer = document.getElementById('addplayer');
const pinput = document.getElementById('playerinput');
addplayer.addEventListener('click', function () {
    if (tnum == 0 || tnum*6 <= pnum) {
        addtable.click();
        addplayerfunc(pinput.value, $('#table' + tnum));
        return;
    }
    else {
        addplayerfunc(pinput.value, $('#table' + tnum));
    }
});
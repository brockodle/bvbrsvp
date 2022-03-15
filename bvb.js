'use strict';

(function () {

    let tnum = 0;
    const tablebtn = document.getElementById('addtable');
    const playerbtn = document.getElementById('addplayer');

    console.log('start is started');

    function player(name, table) {
        this.name = name;
        this.table = table;
    }

    function table(tablenum) {
        this.tablenum = tablenum;
        this.r = Math.round(Math.random() * 150);
        this.b = Math.round(Math.random() * 150);
        this.g = Math.round(Math.random() * 150);
        this.bg = 'rgb(' + (this.r + 175) + ', ' + (this.b + 175) + ', ' + (this.g + 175) + ')';
        this.border = 'rgb(' + this.r + ', ' + this.b + ', ' + this.g + ')';
        this.players = 0;
        this.id = 'table'+tablenum;
    }

    tablebtn.addEventListener('click', function () {

        tnum++;
        let newtable = new table(tnum);

        playerbtn.addEventListener('click', function(){
            
            const playerin = document.getElementById('playerinput');
            newtable.players++;

            $('<div>')
                .addClass('playerbox')
                .text(playerin.value);

        });

        const tableparent = document.getElementById('tables');
        $(tableparent).append(
            $('<div>')
                .attr('id', 'table' + tnum)
                .css('background-color', newtable.bg)
                .css('border', 'solid 2px ' + newtable.border)
                .addClass('grouptable')
                .html('TABLE #' + tnum)
        )
    });

}());
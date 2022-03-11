'use strict';

function player(name, table) {
    this.name = name;
    this.table = table;
}

function table(tablenum, randocol) {
    this.tablenum = tablenum;
    this.randocol = randocol;
}

let tnum = 0;

function buildtable() {
    const tableparent = document.getElementById('tables');
    $(tableparent).append(
        $('<div>')
        .attr('id', 'table' + tnum)
        .addClass('grouptable')
        .html('TABLE #' + tnum)
    )
};

const addtable = document.getElementById('addtable');
addtable.addEventListener('click', function() {
    tnum++;
    buildtable();
})
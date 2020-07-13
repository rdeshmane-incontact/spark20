var dataResult = [{
    "name": "authentication-manager",
    "containerCl": 1536,
    "container": 3072,
    "jvm": "Xmx=1330m",
    "number": 4,
    "currentRunResult.cpu.average": 41.31,
    "currentRunResult.cpu.maximum": 81.68,
    "currentRunResult.memory.average": 31.2,
    "currentRunResult.memory.maximum": 32.36,
    "currentRunResult.maxUsedHeap": 481.1,
    "currentRunResult.maxThread": 279
}, {
    "name": "authorization-manager",
    "containerCl": 1536,
    "container": 3072,
    "jvm": "Xmx=1330m",
    "number": 4,
    "currentRunResult.cpu.average": 41.31,
    "currentRunResult.cpu.maximum": 81.68,
    "currentRunResult.memory.average": 31.2,
    "currentRunResult.memory.maximum": 32.36,
    "currentRunResult.maxUsedHeap": 481.1,
    "currentRunResult.maxThread": 279
}];
var microserviceBasline = {
    "authentication-manager":{
        "baseLineResult.cpu.average": 43,
        "baseLineResult.cpu.maximum": 66,
        "baseLineResult.memory.average": 30.2,
        "baseLineResult.memory.maximum": 32,
        "baseLineResult.maxUsedHeap": 481,
        "baseLineResult.maxThread": 271
    },
    "authorization-manager":{
        "baseLineResult.cpu.average": 43,
        "baseLineResult.cpu.maximum": 66,
        "baseLineResult.memory.average": 30.2,
        "baseLineResult.memory.maximum": 32,
        "baseLineResult.maxUsedHeap": 481,
        "baseLineResult.maxThread": 271
    }
}
var columns = ["name", "containerCl", "container", "jvm", "number", "currentRunResult.cpu.average", "currentRunResult.cpu.maximum", "currentRunResult.memory.average", "currentRunResult.memory.maximum", "currentRunResult.maxUsedHeap", "currentRunResult.maxThread","baseLineResult.cpu.average", "baseLineResult.cpu.maximum", "baseLineResult.memory.average", "baseLineResult.memory.maximum", "baseLineResult.maxUsedHeap", "baseLineResult.maxThread"];
var lastRun = {};

function openTab(event, performance, type) {
    if (type === "L1")
        openContent(event, performance, 'tabcontent');
    else (type === "L2")
    openContent(event, performance, 'performancetabcontent');
}

function openContent(event, performance, tabclass) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName(tabclass);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(performance).style.display = "block";
    event.currentTarget.className += " active";
}

function loadTable() {
    var table = $("<table/>");
    table[0].border = "1";
    var columnCount = 11;
    var row = $(table[0].insertRow(-1));
    for (var i = 0; i < dataResult.length; i++) {
        row = $(table[0].insertRow(-1));
        for (var j = 0; j < columnCount; j++) {
            var cell = $("<td/>");
            cell.html(dataResult[i][columns[j]]);
            switch (columns[j]) {
                case "currentRunResult.cpu.average":
                    if (dataResult[i][columns[j]] < microserviceBasline[(dataResult[i]["name"])]["baseLineResult.cpu.average"]) {
                        // cell.style.backgroundColor="red";
                        cell.addClass("greenClass");
                    } else if (dataResult[i][columns[j]] > microserviceBasline[(dataResult[i]["name"])]["baseLineResult.cpu.average"]) {
                        cell.addEventListener("redClass");
                    }
                case "currentRunResult.cpu.maximum":
                    if (dataResult[i][columns[j]] > microserviceBasline[(dataResult[i]["name"])]["baseLineResult.cpu.maximum"] + 10)
                        cell.addClass("redClass");
            }
            row.append(cell);
        }
        createCell(row, microserviceBasline[(dataResult[i]["name"])]["baseLineResult.cpu.average"]);
        createCell(row, microserviceBasline[(dataResult[i]["name"])]["baseLineResult.cpu.maximum"]);
        createCell(row, microserviceBasline[(dataResult[i]["name"])]["baseLineResult.memory.average"]);
        createCell(row, microserviceBasline[(dataResult[i]["name"])]["baseLineResult.memory.maximum"]);
        createCell(row, microserviceBasline[(dataResult[i]["name"])]["baseLineResult.maxUsedHeap"]);
        createCell(row, microserviceBasline[(dataResult[i]["name"])]["baseLineResult.maxThread"]);
    }

    var dataTable = $("#resultTable");
    dataTable.html("");
    dataTable.append(table);

}

function createCell(row,value) {
    var cell = $("<td/>");
    cell.html(value);
    row.append(cell);
}

loadTable();

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Simple Line Chart"
        },
        axisY: {
            includeZero: false
        },
        data: [{
            type: "line",
            indexLabelFontSize: 16,
            dataPoints: [
                {y: 450},
                {y: 414},
                {y: 520, indexLabel: "\u2191 highest", markerColor: "red", markerType: "triangle"},
                {y: 460},
                {y: 450},
                {y: 500},
                {y: 480},
                {y: 480},
                {y: 410, indexLabel: "\u2193 lowest", markerColor: "DarkSlateGrey", markerType: "cross"},
                {y: 500},
                {y: 480},
                {y: 510}
            ]
        }]
    });
    chart.render();

}

$("#dashboardTab").click(function getLastRunDetails() {
    lastRun = {"runBy": "Abc pqr", "runDate": "Jul 8, 2020 1:04:09 PM Jul 8, 2020 2:06:09 PM (1h 2m )", "decision": "Success"};
    $("#runBy").text("Run By      : " + lastRun.runBy);
    $("#runDate").text("Run Date    : " + lastRun.runDate);
    $("#decision").text("Result       : " + lastRun.decision);
});

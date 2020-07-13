

$("#dashboard").load("dashboard.html");
$("#microservice").load("microservice.html");
$("#component").load("component.html");
$("#gatling").load("gatling.html");
$("#trends").load("trend.html");

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



function createCell(row,value) {
    var cell = $("<td/>");
    cell.html(value);
    row.append(cell);
}



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



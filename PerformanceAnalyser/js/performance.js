

$("#dashboard").load("dashboard.html");
$("#microservice").load("microservice.html");
$("#component").load("component.html");
$("#gatling").load("gatling.html");
$("#trends").load("trend.html");
$("#configuration").load("configuration.html");
$("#performance").load("performance.html");

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


$("#dashboardTab").click(function getLastRunDetails() {
    lastRun = {"runBy": "Abc pqr", "runDate": "Jul 8, 2020 1:04:09 PM Jul 8, 2020 2:06:09 PM (1h 2m )", "decision": "Success"};
    $("#runBy").text("Run By      : " + lastRun.runBy);
    $("#runDate").text("Run Date    : " + lastRun.runDate);
    $("#decision").text("Result       : " + lastRun.decision);
});

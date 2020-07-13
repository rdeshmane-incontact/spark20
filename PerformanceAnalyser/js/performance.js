$("#dashboard").load("dashboard.html");
$("#microservice").load("microservice.html");
$("#component").load("component.html");
$("#gatling").load("gatling.html");
/*$("#trends").load("trend.html");*/
$("#configuration").load("configuration.html");
$("#performance").load("performance.html");

var lastRun = {};

function openTab(event, performance, type) {
    if (type === "L1")
        openContent(event, performance, 'tabcontent', 'tablinks');
    else if (type === "L2")
        openContent(event, performance, 'performancetabcontent', 'performancetablinks');
}

function openContent(event, tabName, tabclass, tabLinkClass) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName(tabclass);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName(tabLinkClass);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    if (!event.currentTarget)
        $("#" + tabName + "Tab").addClass("active");
    else
        event.currentTarget.className += " active";
}

$(document).ready(function () {
    $("#dashboardTab").click();
});

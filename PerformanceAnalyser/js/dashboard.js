$("#dashboardTab").click(function getLastRunDetails() {
    lastRun = {"runBy": "Abc pqr", "runDate": "Jul 8, 2020 1:04:09 PM Jul 8, 2020 2:06:09 PM (1h 2m )", "decision": "Success"};
    $("#runBy").text("Run By      : " + lastRun.runBy);
    $("#runDate").text("Run Date    : " + lastRun.runDate);
    $("#decision").text("Result       : " + lastRun.decision);
});
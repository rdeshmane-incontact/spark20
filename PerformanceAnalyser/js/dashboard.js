$("#dashboardTab").click(function getLastRunDetails() {
    lastRun =
        {
            "runBy": "Nidhi Morolia",
            "startDate": "Jul 8, 2020 1:04:09 PM",
            "endTime": "Jul 8, 2020 2:43:09 PM",
            "runDuration": "89 Minutes",
            "decision": "Success"
        };
    $("#runBy").text("Run By      : " + lastRun.runBy);
    $("#runStartTime").text("Run Start Time    : " + lastRun.startDate);
    $("#runEndTime").text("Run End Time    : " + lastRun.endTime);
    $("#runDuration").text("Run Duration    : " + lastRun.runDuration);
    $("#decision").text("Result       : " + lastRun.decision);
});
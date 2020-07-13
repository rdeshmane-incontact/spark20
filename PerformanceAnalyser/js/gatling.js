var gatlingResult =[
    {"Transactions":"/ Servicelogin","Average hit rate(TPS)":"39.13","90th Percentile Response Time(ms)":"253","Total Transactions":"141054","Passed Transactions":"141052","Failed Transactions":"2","Failure Rate(%)":"0"},
    {"Transactions":"/ login","Average hit rate(TPS)":"86.99","90th Percentile Response Time(ms)":"303","Total Transactions":"313600","Passed Transactions":"307645","Failed Transactions":"5955","Failure Rate(%)":"1.9"}
]

var gatlingBaseline =
    {
        "/ Servicelogin":{"Average hit rate(TPS)":"39.13","90th Percentile Response Time(ms)":"235","Total Transactions":"141245","Passed Transactions":"141,242","Failed Transactions":"3","Failure Rate(%)":"0"},
        "/ login":{"Average hit rate(TPS)":"86.99","90th Percentile Response Time(ms)":"307","Total Transactions":"314,039","Passed Transactions":"314,015","Failed Transactions":"24","Failure Rate(%)":"0.01"}
    }


var gatlingColumns = ["Transactions","Average hit rate(TPS)","90th Percentile Response Time(ms)","Total Transactions","Passed Transactions","Failed Transactions","Failure Rate(%)"];


$("#gatlingTab").click(function getGatlingRunDetails() {
    var table = $("<table/>");
    table[0].border = "1";
    var columnCount = 7;
    var row = $(table[0].insertRow(-1));
    for (var i = 0; i < gatlingResult.length; i++) {
        row = $(table[0].insertRow(-1));
        for (var j = 0; j < columnCount; j++) {
            var cell = $("<td/>");
            cell.html(gatlingResult[i][gatlingColumns[j]]);
            switch (gatlingColumns[j]) {
                case "Average hit rate(TPS)":
                    if (gatlingResult[i][gatlingColumns[j]] < gatlingBaseline[(gatlingResult[i]["Transactions"])]["Average hit rate(TPS)"]) {
                        // cell.style.backgroundColor="red";
                        cell.addClass("greenClass");
                    } else if (gatlingResult[i][gatlingColumns[j]] > gatlingBaseline[(gatlingResult[i]["Transactions"])]["Average hit rate(TPS)"]) {
                        cell.addEventListener("redClass");
                    }
                case "90th Percentile Response Time(ms)":
                    if (gatlingResult[i][gatlingColumns[j]] > gatlingBaseline[(gatlingResult[i]["Transactions"])]["90th Percentile Response Time(ms)"] + 10)
                        cell.addClass("redClass");
            }
            row.append(cell);
        }
        createCell(row, gatlingBaseline[(gatlingResult[i]["Transactions"])]["Average hit rate(TPS)"]);
        createCell(row, gatlingBaseline[(gatlingResult[i]["Transactions"])]["90th Percentile Response Time(ms)"]);
        createCell(row, gatlingBaseline[(gatlingResult[i]["Transactions"])]["Total Transactions"]);
        createCell(row, gatlingBaseline[(gatlingResult[i]["Transactions"])]["Passed Transactions"]);
        createCell(row, gatlingBaseline[(gatlingResult[i]["Transactions"])]["Failed Transactions"]);
        createCell(row, gatlingBaseline[(gatlingResult[i]["Transactions"])]["Failure Rate(%)"]);
    }

    var dataTable = $("#gatlingTable");
    dataTable.html("");
    dataTable.append(table);
})

function createCell(row,value) {
    var cell = $("<td/>");
    cell.html(value);
    row.append(cell);
}
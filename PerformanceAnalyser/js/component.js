var componentResult = [{
    "name" : "RDS - Instance type(Reader & Writer)",
    "currentRunResult.instanceType" : "db.r5.xlarge"
}, {
    "name" : "RDS - Reader - Max CPU Utilization(%)",
    "currentRunResult.cpu" : 26
}, {
    "name" : "RDS - Reader - Max  Connections",
    "currentRunResult.cpu" : 206
}, {
    "name" : "RDS - Reader - Max Queries / Second",
    "currentRunResult.queries" : 18000
}, {
    "name" : "RDS - Writer - Max CPU Utilization(%)",
    "currentRunResult.cpu" : 48
}, {
    "name" : "RDS - Writer - Max  Connections",
    "currentRunResult.cpu" : 464
}, {
    "name" : "RDS - Writer - Max Queries / Second",
    "currentRunResult.queries" : 712000
}, {
    "name" : "Redis - Number of nodes",
    "currentRunResult.nodes" : 2
}, {
    "name" : "Redis - Instance Type",
    "currentRunResult.instanceType" : "cache.r3.2xlarge"
}, {
    "name" : "Common Redis Primary - Max Engine CPU Utilization(%)",
    "currentRunResult.cpu" : 0.48
}, {
    "name" : "Redis Primary - Max Current Connections",
    "currentRunResult.cpu" : 221
}, {
    "name" : "Redis Primary - Max Get Type commands",
    "currentRunResult.queries" : 11550
}, {
    "name" : "Redis Primary - Max Set Type commands",
    "currentRunResult.instanceType" : 0
}, {
    "name" : "DDB - (Table :icpune-perf-user-manager-session) - Max Consumed Write Capacity Units",
    "currentRunResult.ddb" : 822.73
}, {
    "name" : "DDB - (Table :icpune-perf-authentication-manager-user, Index: user_by_userId) - Max Consumed Read Capacity Units",
    "currentRunResult.ddb" : 227
}, {
    "name" : "DDB - (Table :icpune-perf-authentication-manager-user, Index: user_by_username) - Max Consumed Read Capacity Units",
    "currentRunResult.ddb" : 211
}]

var componentBaseline = {
    "RDS - Instance type(Reader & Writer)" :  "db.r5.xlarge",
    "RDS - Reader - Max CPU Utilization(%)" : 21,
    "RDS - Reader - Max  Connections": 125,
    "RDS - Reader - Max Queries / Second": 16700,
    "RDS - Writer - Max CPU Utilization(%)": 66,
    "RDS - Writer - Max  Connections": 430,
    "RDS - Writer - Max Queries / Second": 1530000,
    "Redis - Number of nodes": 2,
    "Redis - Instance Type": "cache.r3.2xlarge",
    "Common Redis Primary - Max Engine CPU Utilization(%)": 1.73,
    "Redis Primary - Max Current Connections": 184,
    "Redis Primary - Max Get Type commands": 11600,
    "Redis Primary - Max Set Type commands": 3,
    "DDB - (Table :icpune-perf-user-manager-session) - Max Consumed Write Capacity Units": 630,
    "DDB - (Table :icpune-perf-authentication-manager-user, Index: user_by_userId) - Max Consumed Read Capacity Units": 213,
    "DDB - (Table :icpune-perf-authentication-manager-user, Index: user_by_username) - Max Consumed Read Capacity Units": 184
}

columns= ["name", "Baseline", "CurrentRun"]


$("#componentTab").click(function getComponentDetails() {
    var table = $("<table/>");
    table[0].border = "1";
    var columnCount = 3;
    var row = $(table[0].insertRow(-1));
    for (var i = 0; i < componentResult.length; i++) {
        row = $(table[0].insertRow(-1));
        for (var j = 0; j < columnCount; j++) {
            var cell = $("<td/>");
            cell.html(componentResult[i][columns[j]]);
            switch (componentResult[i]["name"]) {
                case "currentRunResult.instanceType":
                    if (componentResult[i][columns[j]].localeCompare(componentBaseline[(componentResult[i]["name"])])) {
                        // cell.style.backgroundColor="red";
                        cell.addClass("greenClass");
                    } else {
                        cell.addEventListener("redClass");
                    }
                case "currentRunResult.cpu":
                    if (componentResult[i][columns[j]] > componentBaseline[(componentResult[i]["name"])] + 15)
                    {
                        cell.addClass("redClass");
                    } else if (componentResult[i][columns[j]] < componentBaseline[(componentResult[i]["name"])]){
                        cell.addClass("greenClass");
                    }

                case "currentRunResult.queries":
                    if (componentResult[i][columns[j]] > componentBaseline[(componentResult[i]["name"])] + 1250)
                    {
                        cell.addClass("redClass");
                    } else if (componentResult[i][columns[j]] < componentBaseline[(componentResult[i]["name"])] ) {
                        cell.addClass("greenClass");
                    }

                case "currentRunResult.nodes":
                    if (componentResult[i][columns[j]] !== componentBaseline[(componentResult[i]["name"])] ) {
                        cell.addClass("redClass");
                    } else {
                        cell.addClass("greenClass");
                    }

                case "currentRunResult.ddb":
                    if (componentResult[i][columns[j]] > componentBaseline[(componentResult[i]["name"])] + 100) {
                        cell.addClass("redClass");
                    } else if (componentResult[i][columns[j]] < componentBaseline[(componentResult[i]["name"])] ) {
                        cell.addClass("greenClass");
                    }
            }
            row.append(cell);
        }
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
        createCell(row, componentBaseline[(componentResult[i]["name"])]);
    }

    var dataTable = $("#componentTable");
    dataTable.html("");
    dataTable.append(table);
})

function createCell(row,value) {
    var cell = $("<td/>");
    cell.html(value);
    row.append(cell);
}
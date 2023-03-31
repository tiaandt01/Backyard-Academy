

function loadStats(){
    var gamesPlayed  = [
        { 
            player: 'Anru',
            matches: 1,
            wickets:2,
            bolingRuns:4,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:16,
            battingWicketsLost:1,
        },
        { 
            player: 'Carl',
            matches: 0,
            wickets:0,
            bolingRuns:0,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:0,
            battingWicketsLost:0,
        },
        {
            player: 'Franco', 
            matches: 1,
            wickets:2,
            bolingRuns:7,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:26,
            battingWicketsLost:2,
        },
        { 
            player: 'Tiaan',
            matches: 0,
            wickets:0,
            bolingRuns:0,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:0,
            battingWicketsLost:0,
        },
        { 
            player: 'Ben',
            matches: 0,
            wickets:0,
            bolingRuns:0,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:0,
            battingWicketsLost:0,
        },
        {
            player: 'Darren', 
            matches: 1,
            wickets:2,
            bolingRuns:6,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:8,
            battingWicketsLost:1,
        },
        { 
            player: 'Duane',
            matches: 1,
            wickets:5,
            bolingRuns:-20,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:10,
            battingWicketsLost:1,
        },
        {
            player: 'Ricardo',
            matches: 0,
            wickets:0,
            bolingRuns:0,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:0,
            battingWicketsLost:0,
        },
        { 
            player: 'Liam', 
            matches: 0,
            wickets:0,
            bolingRuns:0,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:0,
            battingWicketsLost:0,
        },
        { 
            player: 'Zian',
             matches: 1,
             wickets:1,
             bolingRuns:13,
             wicketAvg:0,
             bowlingAvg:0,
            //batting
            battingRuns:2,
            battingWicketsLost:3,
        },
        { 
            player: 'Ruan',
             matches: 1,
             wickets:2,
             bolingRuns:7,
             wicketAvg:0,
             bowlingAvg:0,
            //batting
            battingRuns:8,
            battingWicketsLost:1,
        },
        { 
            player: 'Morne',
             matches: 1,
             wickets:2,
             bolingRuns:-2,
             wicketAvg:0,
             bowlingAvg:0,
            //batting
            battingRuns:1,
            battingWicketsLost:3,
        },
        { 
            player: 'Wittie',
             matches: 0,
             wickets:0,
             bolingRuns:0,
             wicketAvg:0,
             bowlingAvg:0,
            //batting
            battingRuns:0,
            battingWicketsLost:0,
        },
        { 
            player: 'Tristen',
             matches: 1,
             wickets:2,
             bolingRuns:2,
             wicketAvg:0,
             bowlingAvg:0,
            //batting
            battingRuns:10,
            battingWicketsLost:2,
        },
      
    ];
    gamesPlayed.forEach(element => {
        var bowlingRunsAvg = (element.bolingRuns / element.matches) ;
        $("#tbMatchesPlayed").append(`<tr>
            <td>${element.player}</td>
            <td>${element.matches}</td>
            <td>${element.wickets}</td>
            <td>${element.bolingRuns}</td>
            <td>${bowlingRunsAvg}</td>
            </tr>`);
        });
    
        gamesPlayed.forEach(element => {
            var battingAvg = (element.battingRuns / element.matches) ;
        $("#tbBatting").append(`<tr>
            <td>${element.player}</td>
            <td>${element.matches}</td>
            <td>${element.battingRuns}</td>
            <td>${element.battingWicketsLost}</td>
            <td>${battingAvg}</td>
            </tr>`);
        });
}
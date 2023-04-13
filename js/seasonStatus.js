//#region ***** pre season game *****
// var gamesPlayed  = [
//     { 
//         player: 'Anru',
//         matches: 1,
//         wickets:2,
//         bolingRuns:4,
//         wicketAvg:0,
//         bowlingAvg:0,
//         //batting
//         battingRuns:16,
//         battingWicketsLost:1,
//     },
//     { 
//         player: 'Carl',
//         matches: 0,
//         wickets:0,
//         bolingRuns:0,
//         wicketAvg:0,
//         bowlingAvg:0,
//         //batting
//         battingRuns:0,
//         battingWicketsLost:0,
//     },
//     {
//         player: 'Franco', 
//         matches: 1,
//         wickets:2,
//         bolingRuns:7,
//         wicketAvg:0,
//         bowlingAvg:0,
//         //batting
//         battingRuns:26,
//         battingWicketsLost:2,
//     },
//     { 
//         player: 'Tiaan',
//         matches: 0,
//         wickets:0,
//         bolingRuns:0,
//         wicketAvg:0,
//         bowlingAvg:0,
//         //batting
//         battingRuns:0,
//         battingWicketsLost:0,
//     },
//     { 
//         player: 'Ben',
//         matches: 0,
//         wickets:0,
//         bolingRuns:0,
//         wicketAvg:0,
//         bowlingAvg:0,
//         //batting
//         battingRuns:0,
//         battingWicketsLost:0,
//     },
//     {
//         player: 'Darren', 
//         matches: 1,
//         wickets:2,
//         bolingRuns:6,
//         wicketAvg:0,
//         bowlingAvg:0,
//         //batting
//         battingRuns:8,
//         battingWicketsLost:1,
//     },
//     { 
//         player: 'Duane',
//         matches: 1,
//         wickets:5,
//         bolingRuns:-20,
//         wicketAvg:0,
//         bowlingAvg:0,
//         //batting
//         battingRuns:10,
//         battingWicketsLost:1,
//     },
//     {
//         player: 'Ricardo',
//         matches: 0,
//         wickets:0,
//         bolingRuns:0,
//         wicketAvg:0,
//         bowlingAvg:0,
//         //batting
//         battingRuns:0,
//         battingWicketsLost:0,
//     },
//     { 
//         player: 'Liam', 
//         matches: 0,
//         wickets:0,
//         bolingRuns:0,
//         wicketAvg:0,
//         bowlingAvg:0,
//         //batting
//         battingRuns:0,
//         battingWicketsLost:0,
//     },
//     { 
//         player: 'Zian',
//          matches: 1,
//          wickets:1,
//          bolingRuns:13,
//          wicketAvg:0,
//          bowlingAvg:0,
//         //batting
//         battingRuns:2,
//         battingWicketsLost:3,
//     },
//     { 
//         player: 'Ruan',
//          matches: 1,
//          wickets:2,
//          bolingRuns:7,
//          wicketAvg:0,
//          bowlingAvg:0,
//         //batting
//         battingRuns:8,
//         battingWicketsLost:1,
//     },
//     { 
//         player: 'Morne',
//          matches: 1,
//          wickets:2,
//          bolingRuns:-2,
//          wicketAvg:0,
//          bowlingAvg:0,
//         //batting
//         battingRuns:1,
//         battingWicketsLost:3,
//     },
//     { 
//         player: 'Wittie',
//          matches: 0,
//          wickets:0,
//          bolingRuns:0,
//          wicketAvg:0,
//          bowlingAvg:0,
//         //batting
//         battingRuns:0,
//         battingWicketsLost:0,
//     },
//     { 
//         player: 'Tristen',
//          matches: 1,
//          wickets:2,
//          bolingRuns:2,
//          wicketAvg:0,
//          bowlingAvg:0,
//         //batting
//         battingRuns:10,
//         battingWicketsLost:2,
//     },
  
// ];
//#endregion

function loadStats(){
    var gamesPlayed  = [
        { 
            player: 'Anru',
            matches: 1+1,
            wickets:2+4,
            bolingRuns:4-8,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:16+7,
            battingWicketsLost:1+2,
        },
        { 
            player: 'Carl',
            matches: 0+1,
            wickets:0+1,
            bolingRuns:0+9,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:-5,
            battingWicketsLost:0+3,
        },
        {
            player: 'Franco', 
            matches: 1+1,
            wickets:2+2,
            bolingRuns:7+4,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:26+22,
            battingWicketsLost:2+2,
        },
        { 
            player: 'Tiaan',
            matches: 0+1,
            wickets:0+1,
            bolingRuns:0+10,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:9,
            battingWicketsLost:0+1,
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
            matches: 1+1,
            wickets:2+1,
            bolingRuns:6+12,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:8+1,
            battingWicketsLost:1+3,
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
            matches: 0+1,
            wickets:0+2,
            bolingRuns:0+3,
            wicketAvg:0,
            bowlingAvg:0,
            //batting
            battingRuns:0+21,
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
             matches: 1+1,
             wickets:2+1,
             bolingRuns:-2+7,
             wicketAvg:0,
             bowlingAvg:0,
            //batting
            battingRuns:1+3,
            battingWicketsLost:3+2,
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
        { 
            player: 'Xavier',
             matches: 1,
             wickets:2,
             bolingRuns:10,
             wicketAvg:0,
             bowlingAvg:0,
            //batting
            battingRuns:8,
            battingWicketsLost:1,
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
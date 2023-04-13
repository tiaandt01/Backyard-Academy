

function loadGameStats(){
    var gameStats = [
        {
            gameNumber: 1,
            playedAgainst: 'Shacks',
            date : '04/11/2023',
            skins: 2,
            matchResult: 'Won',
            matchPoints: 6
        }
    ]


    gameStats.forEach(element => {
        debugger;
       // var bowlingRunsAvg = (element.bolingRuns / element.matches) ;
        $("#tbGamesPlayed").append(`<tr>
            <td>${element.gameNumber}</td>
            <td>${element.playedAgainst}</td>
            <td>${element.date}</td>
            <td>${element.skins}</td>
            <td>${element.matchResult}</td>
            <td>${element.matchPoints}</td>
            </tr>`);
        });
    
       
}
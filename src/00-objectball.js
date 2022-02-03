function gameObject() {
	return {
		home: {
			teamName: "Brooklyn Nets",
			colors: ["Black", "White"],
			players: {
				"Alan Anderson": {
					number: 0,
					shoe: 16,
					points: 22,
					rebounds: 12,
					assists: 12,
					steals: 3,
					blocks: 1,
					slamDunks: 1,
				}, "Reggie Evans": {
					number: 30,
					shoe: 14,
					points: 12,
					rebounds: 12,
					assists: 12,
					steals: 12,
					blocks: 12,
					slamDunks: 7,
				}, "Brook Lopez": {
					number: 11,
					shoe: 17,
					points: 17,
					rebounds: 19,
					assists: 10,
					steals: 3,
					blocks: 1,
					slamDunks: 15,
				}, "Mason Plumlee": {
					number: 1,
					shoe: 19,
					points: 26,
					rebounds: 12,
					assists: 6,
					steals: 3,
					blocks: 8,
					slamDunks: 5,
				}, "Jason Terry": {
					number: 31,
					shoe: 15,
					points: 19,
					rebounds: 2,
					assists: 2,
					steals: 4,
					blocks: 11,
					slamDunks: 1,
				}
			}
		},
		away: {
			teamName: "Charlotte Hornets",
			colors: ["Turquoise", "Purple"],
			players: {
				"Jeff Adrien": {
					number: 4,
					shoe: 18,
					points: 10,
					rebounds: 1,
					assists: 1,
					steals: 2,
					blocks: 7,
					slamDunks: 2
				}, "Bismak Biyombo": {
					number: 0,
					shoe: 16,
					points: 12,
					rebounds: 4,
					assists: 7,
					steals: 7,
					blocks: 15,
					slamDunks: 10
				}, "DeSagna Diop": {
					number: 2,
					shoe: 14,
					points: 24,
					rebounds: 12,
					assists: 12,
					steals: 4,
					blocks: 5,
					slamDunks: 5
				}, "Ben Gordon": {
					number: 8,
					shoe: 15,
					points: 33,
					rebounds: 3,
					assists: 2,
					steals: 1,
					blocks: 1,
					slamDunks: 0
				}, "Brendan Haywood": {
					number: 33,
					shoe: 15,
					points: 6,
					rebounds: 12,
					assists: 12,
					steals: 22,
					blocks: 5,
					slamDunks: 12
				}
			}
		}
	}
}

function numPointsScored(playerName) {
    let gameTeams = gameObject();

    for (let teams in gameTeams) { // iterate through home,away
        let teamInfo = gameTeams[teams];
            for (teamSpecs in teamInfo) { //iterate through teamName,colors,players
                let playerObj = teamInfo.players;
                for (playerInfo in playerObj) { //iterate through players
                    if (playerInfo === playerName) { //check if input matches player name
                        return playerObj[playerInfo].points;
                    }
                }
            }
        }
    }

function shoeSize(playerName) {
    let gameTeams = gameObject();

for (let teams in gameTeams) { // iterate through home,away
    let teamInfo = gameTeams[teams];
        for (teamSpecs in teamInfo) { //iterate through teamName,colors,players
            let playerObj = teamInfo.players;
            for (playerInfo in playerObj) { //iterate through players
                if (playerInfo === playerName) { //check if input matches player name
                    return playerObj[playerInfo].shoe;
                }
            }
        }
    }
}

function teamColors(nameInput) {
    let gameTeams = gameObject();
    for (team in gameTeams) { //iterate through home,away
        let teamInfo = gameTeams[team];
        for (teamSpecs in teamInfo) { //iterate through teamName, colors, players
            let teamNam = teamInfo.teamName;
            if (teamNam === nameInput) { //check if team name matches input
                return teamInfo.colors; //return the color of team
            }
        }
    }
}

function teamNames() {
    const teams = [];
    const game = gameObject();
    teams.push(game.home.teamName, game.away.teamName)
    return teams;
}

function playerNumbers(teamInput) {
	const game = gameObject()
	const jerseyNumbers = []

	for (teamType in game) {
		if (game[teamType].teamName === teamInput) {
			const players = game[teamType].players;
			for (player in players) {
				jerseyNumbers.push(players[player].number)
			}
		}
	}
	return jerseyNumbers;
}

function playerStats(playerInput) {
	const game = gameObject()

	for (teamType in game) {
		const players = game[teamType].players;
		for (player in players) {
			if (player === playerInput) {
				return players[player];
			}
		}
	}
}

function biggestShoeSize() {
	const game = gameObject()
	const shoeSizes = []

	for (teamType in game) {
			const players = game[teamType].players;
			for (player in players) {
				shoeSizes.push(players[player].shoe);
			}
		
	}
	const biggestShoe = shoeSizes.sort((a, b) => a - b);
	return biggestShoe[biggestShoe.length -1];
}

function bigShoeRebounds() {
	const biggestShoe = biggestShoeSize();
	const game = gameObject();
	for (teamType in game) {
		const players = game[teamType].players;
		for (player in players){
			if (players[player].shoe === biggestShoe) {
				return players[player].rebounds;
			}
		}
	}
}


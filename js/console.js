class Console {
    constructor (
        name, 
        release_date,
        history,
        features,
        accessories,
        games = []
    ){
        this.name = name;
        this.release_date = release_date;
        this.history = history;
        this.features = features;
        this.accessories = accessories;
        this.games = games;
    }

    gameInfo(){
        this.games.forEach(game => {
            let gameTitle = document.createElement('p');
            let gameImg = document.createElement('img');
            let img = game.replace(/(?!\w|\s)./g, '').replace(/\s+/g, '').toLowerCase();
    
            gameTitle.textContent = `${game}`;
            gameImg.src = `images/${img}.png`;
    
            document.body.append(gameTitle, gameImg);
        })
    }

    info(){
        let date = document.createElement('p');
        let title = document.createElement('h3');
        let history = document.createElement('p');
        let features = document.createElement('p');
        let accessories = document.createElement('p');

        date.textContent =  `${this.release_date}`;
        title.textContent = `${this.name}`;
        history.textContent = `${this.history}`;
        features.textContent = `${this.features}`;
        accessories.textContent = `${this.accessories}`;

        document.body.append(date, title, history, features, accessories);
    }
}

class upgradedConsole extends Console {
    constructor(
        name, 
        release_date,
        history,
        features,
        accessories,
        games = [],
        extra
    ){
        super(name, release_date, history, features, accessories, games);
        this.extra = extra;
    }
    extraInfo(){
        let extraInfo = document.createElement("p");
        extraInfo.textContent = `One of the unique features of the ${this.name} is ${this.extra}.`;
        
        document.body.appendChild(extraInfo);
    }
}

export { Console, upgradedConsole };
  
const consoleCon = document.querySelector(".console-con");

class Console {
  constructor(
    name,
    release_date,
    alias,
    description,
    features,
    accessories,
    games = [],
    index
  ) {
    this.name = name;
    this.release_date = release_date;
    this.alias = alias;
    this.description = description;
    this.features = features;
    this.accessories = accessories;
    this.games = games;
    this.index = index;
  }

  consoleInfo() {
    consoleCon.innerHTML = `
          <div class="console-heading">
            <h4 class="console-release_date">${this.release_date}</h4>
            <h3 class="console-name">${this.name}</h3>
            <h4 class="console-nickname">${this.alias}</h4>
          </div>
          <p class="console-text">${this.description}</p>
          <div class="console-evolutions">
            <h5>Evolutions</h5>
            <p>${this.features}</p>
          </div>
          <div class="console-acessories">
            <h5>Accessories</h5>
            <p>${this.accessories}</p>
          </div>
          <div class="notable-games">
            <h5>Notable Games</h5>
            <div class="games-con"></div>
          </div>`;
  }

  gameInfo() {
    this.games.forEach((game) => {
      const gameDiv = document.createElement("div");
      const gamesCon = document.querySelector(".games-con");
      let img = game
        .replace(/(?!\w|\s)./g, "")
        .replace(/\s+/g, "")
        .toLowerCase();

      gameDiv.innerHTML = `
                <img class="game-image"
                    src="images/${img}.webp"
                    alt="${game} poster"
                    />
                <p class="game-name"><span>${game}</span></p>
                `;

      gamesCon.appendChild(gameDiv);
    });
  }
}

class upgradedConsole extends Console {
  constructor(
    name,
    release_date,
    alias,
    description,
    features,
    accessories,
    games = [],
    extra,
    index
  ) {
    super(
      name,
      release_date,
      alias,
      description,
      features,
      accessories,
      games,
      index
    );
    this.extra = extra;
  }
}

export { Console, upgradedConsole };

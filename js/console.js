class Console {
    constructor (
        name, 
        release_date,
        history,
        features
    ){
        this.name = name;
        this.release_date = release_date;
        this.history = history;
        this.features = features;
    }
    info(){
        let title = document.createElement('h3');
        let history = document.createElement('p');
        let features = document.createElement('p');

        title.textContent = `${this.name} - ${this.release_date}`;
        history.textContent = `${this.history}`;
        features.textContent = `${this.features}`;

        document.body.append(title, history, features);
    }
}

class PlayStation5 extends Console {
    constructor(
        name, 
        release_date,
        history,
        features,
        ray_tracing
    ){
        super(name, release_date, history, features);
        this.ray_tracing = ray_tracing;
    }
    extra(){
        let extra = document.createElement("p");
        extra.textContent = `One of the unique features of the PlayStation5 is ${this.ray_tracing}.`;
        
        document.body.appendChild(extra);
    }
}

export { Console, PlayStation5 };
  
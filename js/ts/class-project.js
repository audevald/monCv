class Project {
    constructor(project) {
        this._id = "";
        this._text = "";
        this._img = "";
        this._link = "";
        this._id = project.id;
        this._text = project.text;
        this._img = project.img;
        this._link = project.link;
    }
    card() {
        this._card = document.createElement(`div`);
        this._card.classList.add('card');
    }
    cardImg() {
        if (this._img != ``) {
            this._cardImg = document.createElement(`img`);
            this._cardImg.classList.add(`card-img-top`);
            this._cardImg.setAttribute(`src`, this._img);
            this._card.appendChild(this._cardImg);
        }
    }
    cardBody() {
        this._cardBody = document.createElement(`div`);
        this._cardBody.classList.add(`card-body`, `text-center`);
        let titre = document.createElement('h5');
        titre.innerHTML = `${this._id}`;
        let body = document.createElement('p');
        body.classList.add('small');
        body.innerHTML = `${this._text}`;
        let bouton = document.createElement('a');
        bouton.classList.add('btn', 'btn-primary', 'btn-sm');
        bouton.setAttribute('href', this._link);
        bouton.innerHTML = 'Visiter';
        this._cardBody.appendChild(titre);
        this._cardBody.appendChild(body);
        this._cardBody.appendChild(bouton);
        this._card.appendChild(this._cardBody);
    }
    display() {
        this.card();
        this.cardImg();
        this.cardBody();
        document.getElementById('projects').appendChild(this._card);
    }
}

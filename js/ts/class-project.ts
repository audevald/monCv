class Project {

    private _id = "";
    private _text = "";
    private _img = "";
    private _link = "";

    private _card;
    private _cardImg;
    private _cardBody;

    constructor(project) {
        this._id = project.id;
        this._text = project.text;
        this._img = project.img;
        this._link = project.link;
    }

    private card() {
        this._card = document.createElement(`div`);
		this._card.classList.add('card');
    }

    

    private cardImg() {
        if (this._img != ``) {
			this._cardImg = document.createElement(`img`);
			this._cardImg.classList.add(`card-img-top`);
			this._cardImg.setAttribute(`src`, this._img);
            this._card.appendChild(this._cardImg);	
           		
		}
    }

    private cardBody() {
        this._cardBody = document.createElement(`div`);
		this._cardBody.classList.add(`card-body`, `text-center`);
        let titre = document.createElement('h5');
        titre.innerHTML = `${this._id}`;
        let body = document.createElement('p');
        body.classList.add('small');
        body.innerHTML = `${this._text}`;
        let bouton = document.createElement('a');
        bouton.classList.add('btn', 'btn-primary', 'btn-sm')
        bouton.setAttribute('href', this._link); 
        bouton.innerHTML = 'Visiter';    	
        this._cardBody.appendChild(titre);
        this._cardBody.appendChild(body);
        this._cardBody.appendChild(bouton);		
		this._card.appendChild(this._cardBody);	

    }

    public display() {
        this.card();
        
        this.cardImg();
        this.cardBody();
        document.getElementById('projects').appendChild(this._card);

    }

}
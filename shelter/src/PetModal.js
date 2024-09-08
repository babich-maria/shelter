import { Modal } from './Modal';

export class PetModal extends Modal {
    constructor(classes, { id, name, img, type, breed, description, age, inoculations, diseases, parasites }) {
        super(classes);
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.urlToImage = img;
        this.type = type;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
    }

    generateContent() {
        let template = '';
        let pet = document.createElement('div');
        pet.className = 'pet-modal__content';

        this.urlToImage &&
            (template += `<img class="pet__image" src=${this.urlToImage} alt="pet-image">`)


        template += `<div class="pet__content">`

        this.name &&
            (template += `<h3 class="h3 pet__name">${this.name}</h3>`)

        template += `<h4 class="h4 pet__breed">${this.type} - ${this.breed}</h4>`;

        this.description &&
            (template += `<h5 class="h5 pet__text">${this.description}</h5>`)


        template += `<ul class="pet__parameters">`;
        template += `<li class="pet__parameters"><h5 class="h5"><b>Age: </b>${this.age}</h5></li>`;
        template += `<li class="pet__parameters"><h5 class="h5"><b>Inoculations: </b>${this.inoculations.join(',')}</h5></li>`;
        template += `<li class="pet__parameters"><h5 class="h5"><b>Diseases: </b>${this.diseases.join(',')}</h5></li>`;
        template += `<li class="pet__parameters"><h5 class="h5"><b>Parasites:</b> ${this.parasites.join(',')}</h5></li>`;

        template += `</ul>`

        template += `</div>`

        pet.innerHTML = template;
        return pet;
    }

    renderModal() {
        let content = this.generateContent();
        console.log(content)
        super.buildModal(content);
    }
}
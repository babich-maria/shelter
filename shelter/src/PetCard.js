export class PetCard {
  constructor({ id, img, name }) {
    this.id = id;
    this.urlToImage = img;
    this.name = name;
  }

  generatePetCard() {
    let template = '';
    let pet = document.createElement('div');
    pet.className = 'section-pets__card';
    pet.setAttribute('data-id', this.id);

    this.urlToImage &&
      (template += `<img class="pet__image" src=${this.urlToImage} alt="pet">`);

    this.name &&
      (template += `<p class="section-pets__name">${this.name}</p>`);

    template += ` <button class="button_bodered">Learn more</button>`
    template += `</div>`;

    pet.innerHTML = template;
    return pet;
  }
}
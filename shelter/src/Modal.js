export class Modal {
  constructor (classes) {
      this.classes = classes;
      this.modal = '';
      this.modalContent = '';
      this.modalCloseBtn = '';
      this.overlay = '';
  }

  buildModal(content) {
      //Overlay
      this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');

      //Modal
      this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

      //Modal content
      this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');

      //Close Button
      this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
      this.modalCloseBtn.innerHTML = 
      '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">' +
      '<rect x="1" y="1" width="50" height="50" rx="25" stroke="#F1CDB3" stroke-width="2"/>'+
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M27.4262 26L31.7046 21.7216C32.0985 21.3277 32.0985 20.6892 31.7046 20.2954C31.3108 19.9016 30.6723 19.9016 30.2785 20.2954L26 24.5739L21.7215 20.2954C21.3276 19.9015 20.6892 19.9015 20.2953 20.2954C19.9016 20.6892 19.9016 21.3277 20.2953 21.7215L24.5738 26L20.2953 30.2785C19.9016 30.6723 19.9016 31.3108 20.2953 31.7046C20.6892 32.0985 21.3276 32.0985 21.7215 31.7046L26 27.4261L30.2785 31.7046C30.6723 32.0985 31.3108 32.0985 31.7046 31.7046C32.0985 31.3108 32.0985 30.6723 31.7046 30.2785L27.4262 26Z" fill="#292929"/>' +
      '</svg>'

      this.setContent(content);

      this.appendModalElements();

      // Bind Events
      this.bindEvents();

      // Open Modal
      this.openModal();
  }

  createDomNode (node, element, ...classes){
      node = document.createElement(element);
      node.classList.add(...classes);
      return node
  };

  setContent(content) {
      if(typeof content === 'string') {
          this.modalContent.innerHTML = content;
      } else {
          this.modalContent.innerHTML = '';
          this.modalContent.appendChild(content);
      }
  }

  appendModalElements() {
      this.modal.append(this.modalCloseBtn);
      this.modal.append(this.modalContent);
      this.overlay.append(this.modal);
  }

  bindEvents() {
      this.modalCloseBtn.addEventListener('click', this.closeModal);
      this.overlay.addEventListener('click', this.closeModal);
  }

  openModal() {
      console.log(this.overlay);
      document.body.append(this.overlay);
  }

  closeModal(e) {
      let classes = e.target.classList;
      if(classes.contains('overlay') || classes.contains('modal__close-icon')) {
          document.querySelector('.overlay').remove();
      }
  }
} 
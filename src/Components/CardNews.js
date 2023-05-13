class CardNews extends HTMLElement {
   constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.appendChild(this.buid());
      shadow.appendChild(this.styles());
   }

   buid(){
      const componentRoot = document.createElement('div');
      componentRoot.setAttribute('class', 'card');

      const cardLeft = document.createElement('div');
      cardLeft.setAttribute('class', 'card__left');

      const author = document.createElement('span');
      author.textContent = "By " + (this.getAttribute('author') || 'Anonymous');

      const linkTitle = document.createElement('a');
      linkTitle.textContent = this.getAttribute('title');
      linkTitle.href = this.getAttribute('link');

      const newsContent = document.createElement('p');
      newsContent.textContent = this.getAttribute('content');

      cardLeft.appendChild(author);
      cardLeft.appendChild(linkTitle);
      cardLeft.appendChild(newsContent);

      const cardRight = document.createElement('div');
      cardRight.setAttribute('class', 'card__right');
      const newImage = document.createElement('img');
      newImage.src = this.getAttribute('image') || 'https://picsum.photos/200/300';
      newImage.alt = this.getAttribute('title-image');
      
      cardRight.appendChild(newImage);


      componentRoot.appendChild(cardLeft);
      componentRoot.appendChild(cardRight);
      return componentRoot;
   }
   styles(){
      const style = document.createElement('style');

      style.textContent = `
      .card {
         width: 100%;
         border: 1px solid gray;
         box-shadow: 11px 15px 13px -1px rgba(0, 0, 0, 0.6);
         -webkit-box-shadow: 11px 15px 13px -1px rgba(0, 0, 0, 0.6);
         -moz-box-shadow: 11px 15px 13px -1px rgba(0, 0, 0, 0.6);
         display: flex;
         flex-direction: row;
         justify-content: space-between;
      }
      
      .card__left {
         display: flex;
         flex-direction: column;
         justify-content: center;
         padding-left: 10px;
      }
      
      .card__left > span {
         font-weight: 500;
         color: rgb(70, 70, 70);
      }
      
      .card__left > h1, a {
         margin-top: 10px;
         font-size: 25px;
      }
      
      .card__left > p {
         color: rgb(70, 70, 70);
      }
      
      .card__right > img {
         width: 509.5px;
         height: 341.25px;
      }
    
      `

      return style;
   }
}

customElements.define('card-news', CardNews);
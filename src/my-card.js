import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
  width: 300px;
  padding: 20px;
  text-align: center;
  margin: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: grey;
  border: 12px solid;
  border-radius: 10px;
}

.card img{
  width: 100%;
  max-width: 500px;
  display: block;
  margin: auto;
  border: 1px solid;
  border-radius: 1px;
}

.details-bt{
  background-color: skyblue;
  color: black;
  padding: 8px;
  font-size: 20px;
  border-radius: 10px;
}
.deatils-bt:hover{
  background-color: darkblue;
  color: white;
}

@media(min-width: 501px) and (max-width: 799px) 
{
  .details-bt{
    
  }
}

@media(max-width: 499px)
{
  .card img{
    
  } 
}
    `;
  }

  render() {
    return html`

    <div class="card">
    <img src="https://images.wired.it/wp-content/uploads/2016/04/1461243989_mrrobot11.jpg" alt="The Day Crowdstrike Went Down">
  
    <h2> The Day Crowdstrike Went Down </h2>
  
    <p>  In this video we will explore how the lives of those working on crowdstrike during its crash have been forever altered </p>
    <a href="https://hax.psu.edu" class="details" >
    <div>
      <button class="details-bt"> 
      
        WATCH 

      </button>

    </div>
  </div>
`;
  
  }

  static get properties() {

    return {
      title: { type: String },
      ImageSrc: { tpye: String },
      p : { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
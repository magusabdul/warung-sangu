class FooterApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
      <p>Copyright &copy; 2021 - Warung Sangu</p>      
      <p>By : Agus Abdul Malik</p>
     </footer>
      `;
  }
}

customElements.define('footer-app', FooterApp);

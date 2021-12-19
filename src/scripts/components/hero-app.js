class HeroApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero">            
                <div tabindex="0" class="hero__inner">
                    <h1 class="hero__title">Warung Sangu</h1>
                    <p class="hero__tagline">
                        Sebuah makanan yang baik dan lezat dibuat oleh Restoran terbaik!
                    </p>
                    <a href="#container" class="btn-content">Start now!</a>
                </div>
            </div>
        `;
  }
}

customElements.define('hero-app', HeroApp);

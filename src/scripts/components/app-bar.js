class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="app-bar">
      <div class="app-bar__menu">
        <button id="hamburgerButton" aria-label="menu"><i class="fa fa-bars" aria-hidden="true"></i></button>
      </div>
      <div class="app-bar__brand">
        <h1>Warung Sangu</h1>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li><a href="#/home">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li>
            <a
              href="https://github.com/magusabdul"
              target="_blank"
              rel="noopener noreferrer"
              >About Us</a
            >
          </li>
        </ul>
      </nav>
    </header>
      `;
  }
}

customElements.define('app-bar', AppBar);

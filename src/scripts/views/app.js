import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this.initiator_button = button;
    this.initiator_drawer = drawer;
    this.initiator_content = content;

    this.initiator_initialAppShell();
  }

  initiator_initialAppShell() {
    DrawerInitiator.init({
      button: this.initiator_button,
      drawer: this.initiator_drawer,
      content: this.initiator_content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.initiator_content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#container').focus();
    });
  }
}

export default App;

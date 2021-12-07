const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this.initiator_toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this.initiator_closeDrawer(event, drawer);
    });
  },

  initiator_toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  initiator_closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;

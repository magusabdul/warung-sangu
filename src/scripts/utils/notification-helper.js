const NotificationHelper = {
  sendNotification({ title, options }) {
    if (!this.helper_checkAvailability()) {
      console.log('Notification not supported in this browser');
      return;
    }

    if (!this.helper_checkPermission()) {
      console.log('User did not yet granted permission');
      this.helper_requestPermission();
      return;
    }

    this.helper_showNotification({ title, options });
  },

  helper_checkAvailability() {
    return !!('Notification' in window);
  },

  helper_checkPermission() {
    return Notification.permission === 'granted';
  },

  async helper_requestPermission() {
    const status = await Notification.requestPermission();

    if (status === 'denied') {
      console.log('Notification Denied');
    }

    if (status === 'default') {
      console.log('Permission closed');
    }
  },

  async helper_showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;

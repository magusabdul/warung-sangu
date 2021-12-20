import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log(message.data);
    NotificationHelper.sendNotification({
      title: 'Notif from WebSocket',
      options: {
        body: message.data,
        icon: 'icons/android-icon-192x192.png',
        image: 'https://unsplash.com/photos/ZuIDLSz3XLg',
        vibrate: [200, 100, 200],
      },
    });
  },
};

export default WebSocketInitiator;

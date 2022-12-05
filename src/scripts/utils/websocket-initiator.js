import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurant.name} is giving discount!`,
      options: {
        body: restaurant.description,
        image: `${CONFIG.BASE_IMAGE_URL_SM + restaurant.pictureId}`,
      },
    });
  },
};

export default WebSocketInitiator;

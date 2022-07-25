export class User {
  constructor({ displayName, avatarText, avatarBackgroundColor }) {
    this.displayName = displayName;

    if (avatarText) {
      this.avatarText = avatarText;
    } else {
      this.avatarText = this.displayName.split(' ')
        .map((word) => word[0])
        .join('');
    }

    if (avatarBackgroundColor) {
      this.avatarBackgroundColor = avatarBackgroundColor;
    } else {
      this.avatarBackgroundColor = `hsl(${Math.round(Math.random() * 360)}, 75%, 75%)`;
    }
  }

  static fromObject(dataObject) {
    const user = new User({
      displayName: dataObject.displayName,
      avatarText: dataObject.avatarText,
      avatarBackgroundColor: dataObject.avatarBackgroundColor,
    });

    return user;
  }
}

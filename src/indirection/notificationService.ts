// Indirection Example

export class EmailNotifier {
  send(message) {
    console.log(`Sending email: ${message}`);
  }
}

export class SMSNotifier {
  send(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

export class NotificationMediator {
  notifiers;

  constructor() {
    this.notifiers = [];
  }

  register(notifier) {
    this.notifiers.push(notifier);
  }

  sendToAll(message) {
    for (const notifier of this.notifiers) {
      notifier.send(message);
    }
  }
}

// Example

function main() {
  const mediator = new NotificationMediator();
  mediator.register(new EmailNotifier());
  mediator.register(new SMSNotifier());

  mediator.sendToAll("System maintenance at 00:00 UTC.");
}

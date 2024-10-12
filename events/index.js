// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  }

  trigger(eventName) {
    (this.events[eventName] || []).forEach(callback => callback());
  }

  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;

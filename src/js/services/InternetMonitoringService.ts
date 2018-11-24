export default class InternetMonitoringService {
  public isConnected: boolean =navigator.onLine;
  private subscribers: Array<(isConnected: boolean) => void> = [];
  constructor() {
    window.addEventListener("offline", (ev: Event) => {
      this.publish(false);
    });
    window.addEventListener("online", (ev: Event) => {
      this.publish(true);
    });
  }
  private publish(isConnected: boolean): void {
    this.subscribers.forEach(element => {
      element(isConnected);
    });
  }
  public subscribe(subs: (isConnected: boolean) => void) {
    this.subscribers.push(subs);
  }
}

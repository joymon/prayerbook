declare var Promise: any;
export default class ServiceWorkerRegistration {
  constructor() {
    window.addEventListener("beforeinstallprompt", (event: any) => {
      event.prompt();
      // Wait for the user to respond to the prompt
      event.userChoice.then(choiceResult => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted to install");
        } else {
          console.log("User dismissed the prompt");
        }
      });
    });
    window.addEventListener("appinstalled", event => {
      console.log("prayerBook", "installed");
    });
  }
  public register(handler: Function): void {
    if ("serviceWorker" in navigator) {
      console.log("[sw-reg] ServiceWorker supported. Going to register");
      navigator.serviceWorker.register("service-worker.js").then(function(reg) {
        console.log("[sw-reg] ServiceWorker registered at scope " + reg.scope);
      });
      navigator.serviceWorker.ready.then(() => {
        console.log("[sw-reg]  ServiceWorker ready. Sending hi...");
        this.send_message_to_sw("hi").then(() => {
          console.log("[sw-reg] ServiceWorker acknowledged. Start ng app");
          handler();
        }).catch(()=>{
          console.log("[sw-reg] ServiceWorker didn't acknowledged or message not sent. Try luck by starting ng app");
          handler();
        });
      });
      navigator.serviceWorker.oncontrollerchange= (evt:Event) => {
        console.log(`[sw-reg] controller changed. New is ${["controller"]}`);
      };
    } else {
      console.log("[sw-reg] Service worker not supported. Start ng app");
      handler();
    }
  }
  send_message_to_sw(msg: string): Promise<any> {
    return new Promise(function(resolve, reject) {
      // Create a Message Channel
      var msg_chan = new MessageChannel();
      // Handler for recieving message reply from service worker
      msg_chan.port1.onmessage = function(event) {
        if (event.data.error) {
          reject(event.data.error);
        } else {
          resolve(event.data);
        }
      };
      // Send message to service worker along with port for reply
      if (navigator.serviceWorker.controller === null) {
        console.log(
          `[sw-reg] controller is null. state - ${navigator.serviceWorker}`
        );
        reject();
      } else {
        navigator.serviceWorker.controller.postMessage(
          "Client says '" + msg + "'",
          [msg_chan.port2]
        );
      }
    });
  }
}

window.addEventListener("beforeinstallprompt", (event:any) => {
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
  window.addEventListener('appinstalled', (event) => {
    console.log('a2hs', 'installed');
  });
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then(function(reg) {
      console.log("Service Worker Registered at scope " + reg.scope);
    });
  }
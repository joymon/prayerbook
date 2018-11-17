import swReg from "./sw-reg";
import app from "./app";
const swRegObj = new swReg();

let appInstance = new app();

/// Biggest hack or worst code of year 2018 to check whether the code is running under test or not.
/// Hack is to byepass the serviceworker initialization gap.
if (isKarmaRunning()) {
  appInstance.load();
} else {
  swRegObj.register(() => {
    console.log("boostrap - SW started. Loading app");
    appInstance.load();
  });
}
function isKarmaRunning(){
  let isKarmaRunning = false;
  if (typeof window["__karma__"] !== "undefined") {
    isKarmaRunning = true;
  }
  console.log(`[bootstrap] isKarmaRunning - ${isKarmaRunning} ${typeof window["__karma__"]}`); // still undefined
  return isKarmaRunning;  
}
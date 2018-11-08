import swReg from "./sw-reg";
import app from "./app"
const swRegObj = new swReg();

swRegObj.register(()=>{
    console.log("boostrap - SW started. Loading app");
    app();
});

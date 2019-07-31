var core=require("../es6/CoreObject");
ornek=new core.CoreObject();
ornek.on("click",function fonk(){
    console.log("merhaba");
});
ornek.once("click",function fonk2(){
    console.log("merhaba 2");
})
ornek.emit("click");
ornek.emit("click");
console.log("git deneme");
var assert = require('assert');
var {CoreObject} = require('../es6/CoreObject');
describe('emit test', function() {
    var evnt;
    var verify=false;
    beforeEach(function(done){
        var function3=function(){
            console.log("function 3");
        }
        evnt=new CoreObject();
        evnt.on("click",function fonk(){
            console.log("function 1");
        });
        evnt.on("click",function(){
            console.log("function 2")
        });
        evnt.on("click",function3);

        if (evnt.emit("click")){
            verify=true;
        }
        else{
            verify=false;
        }
        done();
    });
    it("emit is true", () => {
        assert.equal(true,verify);
    })

});
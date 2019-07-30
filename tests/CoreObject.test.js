var assert = require('assert');
var {CoreObject} = require('../es6/CoreObject');


function testEt() {
    
    
    

}


describe('emit test', function() {
    var evnt;
    var verify=false;
    beforeEach(function(done){
        evnt=new CoreObject();
        evnt.on("click",function fonk(){
            console.log("merhaba dünya");
        });
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
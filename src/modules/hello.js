function Hello(){
    var name;
    this.sayHello = function(){
        console.log('hello'+ name);
    };
    this.setName = function(tmpName){
        name = tmpName;
    };
}
module.exports = Hello;
//Make the sayHello function's keyword "this" property point to the person object.
//The function should return "Hello Cesar";

const person = {
    firstName: "Cesar",
    sayHi: function() {
        return "Hi " + this.firstName;
    },
    dog: {
        sayHello: function() {
            return "Hello " + this.firstName;
        }
    }
}
/*Look up the call or apply method on MDN DOCS for answers*/

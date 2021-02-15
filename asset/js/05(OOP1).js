// 1. A Person Constructor function 
function Person(firstName, lastName) {

    // 1. set the firstName and lastName using this keyword
    this.fn = firstName
    this.ln = lastName

    //2. Create a greeting function returns [use this keyword to get the first and last name]
    this.greeting = function() {
        return `Hi ${this.fn} ${this.ln}`
    }
    //  ==> Hi , firstName lastName



}

//3. Create Jon Whose full name is ["Jon", "Snow"] Object using new keyword [new ConstructorFun()]
let Jon = new Person("Jon", "Snow")

//4. Display the greeting on Jon Object [remove the string when you have the object]
Obj_C1.innerHTML = Jon.greeting();
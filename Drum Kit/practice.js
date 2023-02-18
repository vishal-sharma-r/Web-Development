function add(num1, num2) {
    return num1 + num2;
    }
     
    function subtract(num1, num2) {
    return num1 - num2;
    }
     
    function multiply(num1, num2) {
    return num1 * num2;
    }
     
    function divide(num1, num2) {
    return num1 / num2;
    }
     
    function calculator(num1, num2, operator) {
    return operator(num1, num2);
    }

    // Javascript object

    var housekeeper1 =
    {
       name: "sharma",
       age: 19,
       work: "house-keeping",
       experience : 2

    }


    // constructor finction
    function BellBoy(name,age,hasPermit,languages)
    {
        this.name = name;
        this.age = age;
        this.hasPermit = hasPermit;
        this.languages = languages;
    }

    // initialise obect 
    // var bellyBoy1 = new BellBoy("Sharma",23,"true",["hindi","french","English"]);
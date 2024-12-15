//task 1
class Person {
    constructor(surname,name,age){
        this.surnamesurname = surname;
        this.name = name;
        this.age = age;
    }
    changeName(a){
        return this.name = a
     }
    
}
class Admin extends Person {
    constructor(surname,name,age,role,salary){
        super(surname,name,age)
        this.role = role;
        this.salary = salary;
        
    }
    changeName(a){
        return this.name = a
     }
    
}

class Player extends Admin {
    constructor(surname,name,age,role,salary,id){
        super(surname,name,age,role,salary)
        this.id = id
    }
    changeName(a){
       return this.name = a
    }
}


let person1 = new Person("Huserynov", "adil", 25);
console.log(person1);

let admin1 = new Admin("Agayev","Zaur",49,"Game Desing",2500)
console.log(admin1);
let player1 = new Player("Imanov","Zaur",22,"E-sport","1500","#2532514")
console.log(player1);

player1.changeName("ali")
console.log(player1);


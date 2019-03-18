class Employee {
    constructor(department, experience, type){
        this.department = department;
        this. experience = experience;
        this.type = type;
    }

    detailsAboutSelf(){
        console.log(`I am ${type} and I work in ${department} department and so far I have ${experience} working experience `)
    }

    resumptionTime(time) {
    if(time > 9) {
        console.log(`You are suppose to resume before 9 but you came in at ${time}`);
        if(time < 8){
            console.log(`You are rather early today`)
        };

    };

    
    }
}// Encapsulation- All properties and methods are hidden within the class 

class Developer extends Employee { // Developer Class inherits from employee class
    constructor(department, experience, type, programmingLang){
     super(department,experience, type);
     this.experience = experience;
     this.department = department;
     this.type = type;
     this.programmingLang = programmingLang;

    }

    detailsAboutSelf(){
    console.log(`I am a ${this.type} with ${this.experience} years experience in ${this.programmingLang}`)
    }

    resumptionTime(proposedTime, actualTime){ // Polymorphism- Employee methods are available for Developer class to reuse
        if(proposedTime < actualTime){
            console.log(`You were suppose to resume at ${proposedTime} but you came at ${actualTime}`)
        }else{
        console.log('You are right on time');
        };
    };
}


const aaron = new Developer('Devops', 5, 'software developer', 'java')
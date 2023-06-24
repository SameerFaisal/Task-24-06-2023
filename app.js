class Vehicle{
    make
    model
    year
    color
    mileage
    rented=false
    constructor(make,model,year,color,mileage){
        this.make = make
        this.model = model
        this.year = year
        this.color=color
        this.mileage=mileage
    }

    rent(){
        if(this.rented===true){
            console.log("This vehicle is already being used")
            
        }else if(this.rented===false) {
            this.rented=true
            console.log('Car Rented successfully')
        }}
    returnCar(){
        if(this.rented===false){
            console.log(`You can't give back a car that you didn't take`)

        }
        else if(this.rented===true){
            this.rented=false
            console.log('Thank You for returning the Car!')
        }
    }
    getDescription(){
        console.log(`Car maker is ${this.make} and model is ${this.model}`)
    }
        
        }
    
class Car extends Vehicle{
    numDoors
    numSeats
constructor(make,model,year,color,mileage,numDoors,numSeats){
    super(make,model,year,color,mileage);
        this.numDoors=numDoors
        this.numSeats=numSeats;
        
    }
    
  

    getDescription(){
        super.getDescription()
        console.log(`${this.numDoors} doors and ${this.numSeats} seats`)
    }
}

class Bike extends Vehicle{
    numGears
    
constructor(make,model,year,color,mileage,numGears){
    super(make,model,year,color,mileage);
        this.numGears=numGears
        
    }
    
  

    getDescription(){
        super.getDescription()
        console.log(`${this.numGears} gears`)
    }
}
        

    
const car1 = new Car('Toyota', 'Corolla', 2019, 'White', 20000,  4, 5)
car1.getDescription()
car1.rent()
car1.returnCar()
car1.rent()


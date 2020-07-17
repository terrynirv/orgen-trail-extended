class Traveler {
    constructor(name){
      this.name = name
      this.food = 1
        this.ishealthy = true
    }
                hunt () {
                    this.food += 2
                    if (this.food > 0) {
                        this.ishealthy = true
                    }
                        
      }
                eat () {
        
        
                    if (this.food <= 0) {
                        this.ishealthy = false
                    } else {
                        this.food -= 1
                    }
        }
      }
class Wagon{
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        let openSeats = this.capacity - this.passengers.length
        return openSeats
        
    }
    join(Traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(Traveler)
        }
    }
    shouldQuarantine() {
        const wellness = this.passengers.some(Traveler => Traveler.ishealthy == false)
        return wellness
    }
    totalFood() {
        let foodpile = 0
        for (let index = 0; index < this.passengers.length; index++) {
            foodpile += this.passengers[index].food

           

            
        }
        return foodpile
    }
    
  }
  
class Doctor extends Traveler {
    constructor(name) {
        super(name)
    }
    heal(traveler) {
        if (traveler.ishealthy == false) {
              traveler.ishealthy = true
              
          }
      }
}
class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
    }
    hunt () {
        this.food += 5
        if (this.food > 0) {
            this.ishealthy = true
        }
            
}
    eat () {


        if (this.food <= 1) {
            this.ishealthy = false
            this.food = 0
        } else {
            this.food -= 2
        }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food < numOfFoodUnits) {
            return this.food
            
        } else {
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
            
        }

    }
  }
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
  
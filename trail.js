
const p1Element = document.createElement('p')
p1Element.id = 1
p1Element.append('Henrietta has joined the wagon.')
document.body.appendChild(p1Element)
const p2Element = document.createElement('p')
p2Element.id = 2
p2Element.append('Juan has joined the wagon.')
document.body.appendChild(p2Element)
const p3Element = document.createElement('p')
p3Element.id = 3
p3Element.append('Sara has joined the wagon.')
document.body.appendChild(p3Element)
const p4Element = document.createElement('p')
p4Element.id = 4
p4Element.append('Dr.Smith has join the wagon.')
document.body.appendChild(p4Element)
const p5Element = document.createElement('p')
p5Element.id = 5
p5Element.append('Theres no room for Maude')
document.body.appendChild(p5Element)
const p6Element = document.createElement('p')
p6Element.id = 6
p6Element.append('Sara goes hunting and brings back 5 food. Dr.Smith goes hunting and brings back 2 food.')
document.body.appendChild(p6Element)
const p7Element = document.createElement('p')
p7Element.id = 7
p7Element.append('Everyone eats.')
document.body.appendChild(p7Element)
const p8Element = document.createElement('p')
p8Element.id = 8
p8Element.append('Juan over-eats and becomes sick.')
document.body.appendChild(p8Element)
const p9Element = document.createElement('p')
p9Element.id = 9
p9Element.append('Dr.Smith heals Juan.')
document.body.appendChild(p9Element)
const p10Element = document.createElement('p')
p10Element.id = 10
p10Element.append('Sara shares her food with Juan')
document.body.appendChild(p10Element)
/*let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);*/
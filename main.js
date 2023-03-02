console.log("HELLO WOLRD")

const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50
    }
]


const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

let template = ''


let turnDamage = 0
let turn = { player: "", number: 0 }


function drawHeroes() {
    heroes.forEach(h => {
        let heroesElem = document.getElementById(h.name)

    });

}

function drawMonster() {

}
// TODO on click of attack add damage of the heroes
// TODO subtract damage from monster
// TODO have monster attack back subtract hp from both heroes 
function attack() {
    heroes.forEach(h => {
        turnDamage += h.damage
    })
    boss.health -= turnDamage
    console.log(boss)
    turnDamage = 0
}


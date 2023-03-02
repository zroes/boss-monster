console.log("HELLO WOLRD")

const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        startingHealth: 100,
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50,
        startingHealth: 50,
    }
]


const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1,
    startingHealth: 100
}



let turnDamage = 0
let turn = { player: "", number: 0 }


function drawHeroes() {
    // let template = ``
    heroes.forEach(h => {
        let heroesElem = document.getElementById(h.type)
        let heroName = heroesElem?.querySelector('.hero-name')
        let heroHP = heroesElem.querySelector('.hero-hp')
        let heroDMG = heroesElem.querySelector('.hero-dmg')
        if (heroName)
            heroName.innerText = `${h.name}`
        if (heroHP)
            heroHP.innerText = `${h.health}`
        if (heroDMG)
            heroDMG.innerText = `${h.damage}`
    });
}

function drawBossHealth() {
    let template = ''
    let bossHPElem = document.getElementById('boss-hp')
    template = `
    <div onclick="attack()" class="bg-dark" role="progressbar" aria-valuenow="${boss.health}" aria-valuemin="0"
    aria-valuemax="${boss.maxHealth}" style="height: 20px">
    <div class="progress-bar bg-danger" style="width: ${boss.health}%">${boss.health} / ${boss.maxHealth}</div>
  </div>`
    bossHPElem.innerHTML = template
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
    if (boss.health < 0) {
        levelUp()
    }
    drawBossHealth()
}

function levelUp() {
    boss.level++
    boss.maxHealth = boss.maxHealth * 2
    boss.health = boss.maxHealth

}

function bossAttack() {
    heroes.forEach(h => {
        h.health -= boss.damage
        if (h.health < 1) {
            h.health = 0
            drawHeroes()
            window.alert('you have lost loser', resetGame())



        }
    })

    drawHeroes()
}

function resetGame() {
    heroes.forEach(h => h.health = h.startingHealth)
    boss.health = boss.startingHealth
    drawBossHealth()
    drawHeroes()
}

setInterval(bossAttack, 1000)
drawHeroes()
drawBossHealth()

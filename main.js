console.log("HELLO WOLRD")

const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        startingHealth: 100,
        starting
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

let gold = 25



let turnDamage = 0
let turn = { player: "", number: 0 }

drawGold()
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
    aria-valuemax="${boss.maxHealth}" style="height: 24px">
    <div class="progress-bar bg-danger" style="width: ${100 * (boss.health / boss.maxHealth)}%">${boss.health} / ${boss.maxHealth}</div>
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
    if (boss.health <= 0) {
        levelUp()
    }
    drawBossHealth()
}

function levelUp() {
    gold += 25 * boss.level
    boss.level++
    boss.maxHealth = boss.maxHealth * 2
    boss.health = boss.maxHealth
    drawGold()
}

function bossAttack() {
    heroes.forEach(h => {
        h.health -= boss.damage
        if (h.health < 1) {
            h.health = 0
            drawHeroes()
            window.alert('you have lost loser')
            resetGame()
        }
    })

    drawHeroes()
}

function resetGame() {
    heroes.forEach(h => h.health = h.startingHealth)
    boss.health = boss.startingHealth
    boss.maxHealth = boss.startingHealth
    gold = 25
    drawBossHealth()
    drawHeroes()
    drawGold()
}

function addDamage() {
    if (gold > 49) {

        heroes.forEach(h => {
            h.damage = math.floor(h.damage * 1.5)
        });
        gold -= 50
        drawGold()
    }
    else {
        window.alert("bread up")
    }

}

function buyPotion() {
    if (gold > 29) {

        heroes.forEach(h => h.health += 20)
        gold -= 30
        drawGold()
    } else {
        window.alert("bread up fool")
    }
}

function drawGold() {
    let goldElem = document.getElementById("gold")
    goldElem.innerText = gold.toString()
}

setInterval(bossAttack, 1000)
drawHeroes()
drawBossHealth()

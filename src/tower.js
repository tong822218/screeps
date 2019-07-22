var Tower = function (tower) {
    this.tower = tower
}

Tower.prototype.init = function () {
    this.repairClosestStructure()
    this.repairClosestCreep()
    this.defence()
}
Tower.prototype.attack = function (target) {
    this.tower.attack(target);
}
Tower.prototype.repair = function (target) {
    tower.repair(target);
}
Tower.prototype.findClosestHostileCreep = function () {
    return closestHostile = this.tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
}
Tower.prototype.findClosestNotFullHitsStructures = function () {
    return this.tower.pos.findClosestByRange(FIND_STRUCTURES, {
        filter: (structure) => structure.hits < structure.hitsMax
    });
}
// 找到最近的受伤creep
Tower.prototype.findClosestNotFullHitsCreep = function () {
    return this.tower.pos.findClosestByRange(FIND_MY_CREEPS, {
        filter: (creep) => creep.hits < creep.hitsMax
    });
}
// 修复受损建筑
Tower.prototype.repairClosestStructure = function () {
    const structure = this.findClosestNotFullHitsStructures()
    if(structure){
        this.repair(structure)
    }
}
// 修复受损creep
Tower.prototype.repairClosestCreep = function () {
    const creep = this.findClosestNotFullHitsCreep()
    if(creep){
        this.repair(creep)
    }
}

// 防御入侵者
Tower.prototype.defence = function () {
    const hostile = this.findClosestHostileCreep()
    if(hostile){
        this.attack(hostile)
    }
}

module.exports = Tower;
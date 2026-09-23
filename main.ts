let right = 0
let Left = 0
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
basic.forever(function () {
    Left = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    right = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
})

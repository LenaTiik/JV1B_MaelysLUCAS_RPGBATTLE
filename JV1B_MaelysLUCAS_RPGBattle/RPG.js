
// je crée les différentes variables qui me permettre de définir la vie/le mana/le niveau d'xp/la puissance des attaques/le cout du mana de chaque personnage.
var pvgirlmax = 8
var pvgirlmin = 0
var managirlmax = 8
var managirlmin = 0
var xpgirlmax = 8
var xpgirlmin = 0

var atkgirl = 1
var atkspegirl = 3
var manaatkspegirl = 2
var soingirl = 4
var manasoingirl = 4


var pvboymax = 8
var pvboymin = 0
var manaboymax = 8
var manaboymin = 0
var xpboymax = 8
var xpboymin = 0

var atkboy = 1
var atkspeboy = 2
var manaatkspegirl = 2
var shieldboy = 0
var manashieldboy = 3

var pvarchon = 8
var pvarchonmax = 8
var pvarchonmin = 0
var manaarchonmax = 8
var manaarchonmin = 0
var xparchonmax = 8
var xparchonmin = 0

var atkarchon = 1
var atkspearchon = 3
var manaatkspearchon = 2

var pvarchonicemax = 8
var pvarchonicemin = 0
var manaarchonicemax = 8
var manaarchonicemin = 0
var xparchonicemax = 8
var xparchonicemin = 0

var atkarchonice = 1
var atkspearchonice = 1
var manaatkspearchonice = 3

function round() {
    pvarchon = pvarchon - atkboy
    pvarchon = pvarchon - atkgirl
    pvarchon = pvarchon - atkspeboy
    pvarchon = pvarchon - atkspegirl
}
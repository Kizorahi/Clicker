const priceUpdate = {
  one : document.getElementById("priceUpdate"),
  two : document.getElementById("priceUpdate2"),
  three : document.getElementById("priceUpdate3"),
  four : document.getElementById("priceUpdate4")
}
const skinChangeColorValue = document.querySelector(".colorSkin")
const weaponBlocks = {
  one: document.getElementById("weaponBuyOne"),
  two: document.getElementById("weaponBuyTwo"),
  three: document.getElementById("weaponBuyThree"),
  four: document.getElementById("weaponBuyFour")
}

let money = 0
let updating = 1
let bossHearts = 50000
let damage = 0

let randomSkinEnable
up.innerText = "One Click = " + updating

let onePrice = 199
let twoPrice = 599
let threePrice = 1420
let fourPrice = 2060

let skinBuy = ["sold out", false, false, false, false, false, false, false, false, false]
let backgroundHeaderBuy = [false, false, false, false, false, false, false, false, false, false]
let weaponBuy = [false, false, false, false]

function save() {
  localStorage.setItem("saveMoney", JSON.stringify(money))
  localStorage.setItem("saveUpdating", JSON.stringify(updating))
  localStorage.setItem("onePriceSave", JSON.stringify(onePrice))
  localStorage.setItem("twoPriceSave", JSON.stringify(twoPrice))
  localStorage.setItem("threePriceSave", JSON.stringify(threePrice))
  localStorage.setItem("fourPriceSave", JSON.stringify(fourPrice))
  localStorage.setItem("bossHeartsSave", JSON.stringify(bossHearts))
  localStorage.setItem("damageValueSave", JSON.stringify(damage))
  localStorage.setItem("skinBuySave", JSON.stringify(skinBuy))
  localStorage.setItem("backgroundHeaderBuySave", JSON.stringify(backgroundHeaderBuy))
  localStorage.setItem("weaponBuySave", JSON.stringify(weaponBuy))
}

if (localStorage.getItem("saveMoney")) {
  money = JSON.parse(localStorage.getItem("saveMoney"))
  updating = JSON.parse(localStorage.getItem("saveUpdating"))
  onePrice = JSON.parse(localStorage.getItem("onePriceSave"))
  twoPrice = JSON.parse(localStorage.getItem("twoPriceSave"))
  threePrice = JSON.parse(localStorage.getItem("threePriceSave"))
  fourPrice = JSON.parse(localStorage.getItem("fourPriceSave"))
  bossHearts = JSON.parse(localStorage.getItem("bossHeartsSave"))
  damage = JSON.parse(localStorage.getItem("damageValueSave"))
  skinBuy = JSON.parse(localStorage.getItem("skinBuySave"))
  backgroundHeaderBuy = JSON.parse(localStorage.getItem("backgroundHeaderBuySave"))
  weaponBuy = JSON.parse(localStorage.getItem("weaponBuySave"))
  balance.innerText = money.toLocaleString("fr-FR")
  up.innerText = "One Click = " + updating
  priceUpdate.one.innerText = Math.trunc(onePrice).toLocaleString("fr-FR")
  priceUpdate.two.innerText = Math.trunc(twoPrice).toLocaleString("fr-FR")
  priceUpdate.three.innerText = Math.trunc(threePrice).toLocaleString("fr-FR")
  priceUpdate.four.innerText = Math.trunc(fourPrice).toLocaleString("fr-FR")
  if (skinBuy[1] === true) {
    document.getElementById("boughtRandomSkinVisible").innerText = "✓"
  } if (skinBuy[2] === true) {
    document.getElementById("boughtAnimateVisible").innerText = "✓"
  } if (skinBuy[3] === true) {
    document.getElementById("boughtRgbSkinVisible").innerText = "✓"
  } if (skinBuy[4] === true) {
    document.getElementById("boughtPokeballVisible").innerText = "✓"
  } if (skinBuy[5] === true) {
    document.getElementById("boughtPikapikaVisible").innerText = "✓"
  } if (skinBuy[6] === true) {
    document.getElementById("boughtBillVisible").innerText = "✓"
  } if (skinBuy[7] === true) {
    document.getElementById("boughtDonutVisible").innerText = "✓"
  } if (skinBuy[8] === true) {
    document.getElementById("boughtTargetVisible").innerText = "✓"
  } if (skinBuy[9] === true) {
    document.getElementById("boughtVinylRecord_visible").innerText = "✓"
  } if (backgroundHeaderBuy[0] === true) {
    document.getElementById("boughtSunBGVisible").innerText = "✓"
  } if (backgroundHeaderBuy[1] === true) {
    document.getElementById("boughtStarrySkyBGVisible").innerText = "✓"
  } if (backgroundHeaderBuy[2] === true) {
    document.getElementById("boughtOceanBGVisible").innerText = "✓"
  } if (backgroundHeaderBuy[3] === true) {
    document.getElementById("boughtStarsBGVisible").innerText = "✓"
  } if (backgroundHeaderBuy[4] === true) {
    document.getElementById("boughtc01BGVisible").innerText = "✓"
  } if (backgroundHeaderBuy[5] === true) {
    document.getElementById("boughtRainbowBGVisible").innerText = "✓"
  } if (backgroundHeaderBuy[6] === true) {
    document.getElementById("boughtPlanetEarthBGVisible").innerText = "✓"
  } if (backgroundHeaderBuy[7] === true) {
    document.getElementById("boughtPaintBackgroundBGVisible").innerText = "✓"
  } if (backgroundHeaderBuy[8] === true) {
    document.getElementById("boughtLightTrailBGVisible").innerText = "✓"
  } if (backgroundHeaderBuy[9] === true) {
    document.getElementById("boughtMinionsBackgroundBGVisible").innerText = "✓"
  } if (bossHearts <= 0) {
    document.getElementById("gradient").style.display = "inline-block"
  }

  hearts.innerText = bossHearts
}

// Delete Save
deleteSave.onclick = function() {
  const confirm1 = confirm("Delete Saving?")
  if (confirm1) {
    localStorage.removeItem("saveMoney")
    localStorage.removeItem("saveUpdating")
    localStorage.removeItem("onePriceSave")
    localStorage.removeItem("twoPriceSave")
    localStorage.removeItem("threePriceSave")
    localStorage.removeItem("fourPriceSave")
    localStorage.removeItem("bossHeartsSave")
    localStorage.removeItem("damageValueSave")
    localStorage.removeItem("skinBuySave")
    localStorage.removeItem("backgroundHeaderBuySave")
    localStorage.removeItem("weaponBuySave")
    location.reload()
  }
}

function clickCircle() {
  money += updating
  balance.innerText = money.toLocaleString("fr-FR")
  save()
}
click.onclick = clickCircle

function buyPlusOne() {
  if (money >= onePrice) {
    updating += 1
    money -= Math.trunc(onePrice)
    onePrice *= 1.07
    balance.innerText = money.toLocaleString("fr-FR")
    up.innerText = "One Click = " + updating
    priceUpdate.one.innerText = Math.trunc(onePrice).toLocaleString("fr-FR")
    save()
    buy.style.borderColor = ThemeUIBuy
    setTimeout(() => {
      buy.style.borderColor = ThemeUIBasic
    }, 500)
  } else {
    buy.style.borderColor = ThemeUIWrong
    setTimeout(() => {
      buy.style.borderColor = ThemeUIBasic
    }, 500)
  }
}
buy.onclick = buyPlusOne

function buyPlusFour() {
  if (money >= twoPrice) {
    updating += 4
    money -= Math.trunc(twoPrice)
    twoPrice *= 1.07
    balance.innerText = money.toLocaleString("fr-FR")
    up.innerText = "One Click = " + updating
    priceUpdate.two.innerText = Math.trunc(twoPrice).toLocaleString("fr-FR")
    save()
    buyOne.style.borderColor = ThemeUIBuy
    setTimeout(() => {
      buyOne.style.borderColor = ThemeUIBasic
    }, 500)
  } else {
    buyOne.style.borderColor = ThemeUIWrong
    setTimeout(() => {
      buyOne.style.borderColor = ThemeUIBasic
    }, 500)
  }
}
buyOne.onclick = buyPlusFour

function buyPlusTen() {
  if (money >= threePrice) {
    updating += 10
    money -= Math.trunc(threePrice)
    threePrice *= 1.07
    balance.innerText = money.toLocaleString("fr-FR")
    up.innerText = "One Click = " + updating
    priceUpdate.three.innerText = Math.trunc(threePrice).toLocaleString("fr-FR")
    save()
    buyTwo.style.borderColor = ThemeUIBuy
    setTimeout(() => {
      buyTwo.style.borderColor = ThemeUIBasic
    }, 500)
  } else {
    buyTwo.style.borderColor = ThemeUIWrong
    setTimeout(() => {
      buyTwo.style.borderColor = ThemeUIBasic
    }, 500)
  }
}
buyTwo.onclick = buyPlusTen

function buyPlusFifteen() {
  if (money >= fourPrice) {
    updating += 15
    money -= Math.trunc(fourPrice)
    fourPrice *= 1.07
    balance.innerText = money.toLocaleString("fr-FR")
    up.innerText = "One Click = " + updating
    priceUpdate.four.innerText = Math.trunc(fourPrice).toLocaleString("fr-FR")
    save()
    buyThree.style.borderColor = ThemeUIBuy
    setTimeout(() => {
      buyThree.style.borderColor = ThemeUIBasic
    }, 500)
  } else {
    buyThree.style.borderColor = ThemeUIWrong
    setTimeout(() => {
      buyThree.style.borderColor = ThemeUIBasic
    }, 500)
  }
}
buyThree.onclick = buyPlusFifteen

//skins
defaultSkin.onclick = function() {
  randomSkinEnable = false
  click.style.background = ThemeClickUI
  defaultSkin.style.color = ThemeUIBuy
  setTimeout(() => {
    defaultSkin.style.color = ThemeUIText
  }, 500)
}

function color() {
  if (money >= 99) {
    money -= 99
    randomSkinEnable = false
    balance.innerText = money.toLocaleString("fr-FR")
    save()
    click.classList.add("uploadReset")
    click.style.background = colorSkin.value
    colorSkin.style.color = ThemeUIBuy
    setTimeout(() => {
      colorSkin.style.color = ThemeUIText
    }, 500)
  } else {
      colorSkin.style.color = ThemeUIWrong
    setTimeout(() => {
      colorSkin.style.color = ThemeUIText
    }, 500)
  }
  skinChangeColorValue.style.background = colorSkin.value
}
colorSkin.onchange = color

function gradientSkin() {
  if (bossHearts <= 0) {
    document.getElementById("gradient").style.background = "linear-gradient(" + inputGradient1.value + ", " + inputGradient2.value +")"
    click.style.background = "linear-gradient(" + inputGradient1.value + ", " + inputGradient2.value +")"
  }
}
inputGradient1.onchange = gradientSkin
inputGradient2.onchange = gradientSkin

function SkinRandomColorStatic() {
  if (money >= 199) {
    money -= 199
    randomSkinEnable = false
    balance.innerText = money.toLocaleString("fr-FR")
    save()
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16)
    click.classList.add("uploadReset")
    click.style.background = color
    randomColorStatic.style.color = ThemeUIBuy
    setTimeout(() => {
      randomColorStatic.style.color = ThemeUIText
    }, 500)
  } else {
    randomColorStatic.style.color = ThemeUIWrong
    setTimeout(() => {
      randomColorStatic.style.color = ThemeUIText
    }, 500)
  }
}
randomColorStatic.onclick = SkinRandomColorStatic

function skinRnd() { //buy
  if (skinBuy[1] != true) {
    if (money >= 249000) {
      money -= 249000
      randomSkinEnable = true
      skinBuy[1] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtRandomSkinVisible.innerText = "✓"
      save()
      randomColor() //activation
      randomSkin.style.color = ThemeUIBuy
      setTimeout(() => {
        randomSkin.style.color = ThemeUIText
      }, 500)
    } else {
      randomSkin.style.color = ThemeUIWrong
      setTimeout(() => {
        randomSkin.style.color = ThemeUIText
      }, 500)
    }
  } else {
    randomColor()
    randomSkinEnable = true
    randomSkin.style.color = ThemeUIBuy
      setTimeout(() => {
        randomSkin.style.color = ThemeUIText
      }, 500)
  }
}
randomSkin.addEventListener("click", skinRnd)

function randomColor() { //activation
  if (randomSkinEnable === true) {
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16)
    click.classList.add("uploadReset")
    click.style.background = color
    click.addEventListener("click", randomColor)
  }
}

function boughtAnimateSkin() {
  if (skinBuy[2] != true) {
    if (money >= 186000) {
      money -= 186000
      randomSkinEnable = false
      skinBuy[2] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtAnimateVisible.innerText = "✓"
      save()
      animSkn()
      animateSkin.style.color = "lime"
      setTimeout(() => {
        animateSkin.style.color = ThemeUIText
      }, 500)
    } else {
      animateSkin.style.color = ThemeUIWrong
      setTimeout(() => {
        animateSkin.style.color = ThemeUIText
      }, 500)
    }
  } else {
    animSkn()
    animateSkin.style.color = ThemeUIBuy
      setTimeout(() => {
        animateSkin.style.color = ThemeUIText
      }, 500)
  }
}

function animSkn() {
  click.classList.add("uploadReset")
  click.style.background = "transparent"
  click.classList.add("animateSkin")
}
animateSkin.addEventListener("click", boughtAnimateSkin)

function SkinRgbBought() {
  if (skinBuy[3] != true) {
    if (money >= 8999) {
      money -= 8999
      randomSkinEnable = false
      skinBuy[3] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtRgbSkinVisible.innerText = "✓"
      save()
      rgbSkin()
      rgb.style.color = ThemeUIBuy
      setTimeout(() => {
        rgb.style.color = ThemeUIText
      }, 500)
    } else {
      rgb.style.color = ThemeUIWrong
      setTimeout(() => {
        rgb.style.color = ThemeUIText
      }, 500)
    }
  } else {
    rgbSkin()
    rgb.style.color = ThemeUIBuy
      setTimeout(() => {
        rgb.style.color = ThemeUIText
      }, 500)
  }
}

function rgbSkin() { click.style.background = "url(images/skins/rgb.png) no-repeat center / cover" }
rgb.addEventListener("click", SkinRgbBought)

function skinPokeballBought() {
  if (skinBuy[4] != true) {
    if (money >= 15999) {
      money -= 15999
      randomSkinEnable = false
      skinBuy[4] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtPokeballVisible.innerText = "✓"
      save()
      pokeballSkin()
      pokeball.style.color = ThemeUIBuy
      setTimeout(() => {
        pokeball.style.color = ThemeUIText
      }, 500)
    } else {
      pokeball.style.color = ThemeUIWrong
      setTimeout(() => {
        pokeball.style.color = ThemeUIText
      }, 500)
    }
  } else {
    pokeballSkin()
    pokeball.style.color = ThemeUIBuy
      setTimeout(() => {
        pokeball.style.color = ThemeUIText
      }, 500)
  }
}

function pokeballSkin() { click.style.background = "url(images/skins/pokeball.png) no-repeat center / cover" }
pokeball.addEventListener("click", skinPokeballBought)

function boughtSkinTarget() {
  if (skinBuy[8] != true) {
    if (money >= 20000) {
      money -= 20000
      randomSkinEnable = false
      skinBuy[8] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtTargetVisible.innerText = "✓"
      save()
      targetSkin()
      target.style.color = ThemeUIBuy
      setTimeout(() => {
        target.style.color = ThemeUIText
      }, 500)
    } else {
      target.style.color = ThemeUIWrong
      setTimeout(() => {
        target.style.color = ThemeUIText
      }, 500)
    }
  } else {
    targetSkin()
    target.style.color = ThemeUIBuy
      setTimeout(() => {
        target.style.color = ThemeUIText
      }, 500)
  }
}

function targetSkin() { click.style.background = "url(images/skins/target.png) no-repeat center / cover" }
target.addEventListener("click", boughtSkinTarget)

function boughtSkinPikapika() {
  if (skinBuy[5] != true) {
    if (money >= 25999) {
      money -= 25999
      randomSkinEnable = false
      skinBuy[5] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtPikapikaVisible.innerText = "✓"
      save()
      pikapikaSkin()
      pikapika.style.color = ThemeUIBuy
      setTimeout(() => {
        pikapika.style.color = ThemeUIText
      }, 500)
    } else {
      pikapika.style.color = ThemeUIWrong
      setTimeout(() => {
        pikapika.style.color = ThemeUIText
      }, 500)
    }
  } else {
    pikapikaSkin()
    pikapika.style.color = ThemeUIBuy
      setTimeout(() => {
        pikapika.style.color = ThemeUIText
      }, 500)
  }
}

function pikapikaSkin() { click.style.background = "url(images/skins/pikapika.png) no-repeat center / cover" }
pikapika.addEventListener("click", boughtSkinPikapika)

function boughtSkinBill() {
  if (skinBuy[6] != true) {
    if (money >= 29990) {
      money -= 29990
      randomSkinEnable = false
      skinBuy[6] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtBillVisible.innerText = "✓"
      save()
      billSkin()
      bill.style.color = ThemeUIBuy
      setTimeout(() => {
        bill.style.color = ThemeUIText
      }, 500)
    } else {
      bill.style.color = ThemeUIWrong
      setTimeout(() => {
        bill.style.color = ThemeUIText
      }, 500)
    }
  } else {
    billSkin()
    bill.style.color = ThemeUIBuy
      setTimeout(() => {
        bill.style.color = ThemeUIText
      }, 500)
  }
}

function billSkin() { click.style.background = "url(images/skins/bill.png) no-repeat center / cover" }
bill.addEventListener("click", boughtSkinBill)

function boughtSkinVinyl_record() {
  if (skinBuy[9] != true) {
    if (money >= 35600) {
      money -= 35600
      randomSkinEnable = false
      skinBuy[9] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtVinylRecord_visible.innerText = "✓"
      save()
      vinyl_recordSkin()
      vinyl_record.style.color = ThemeUIBuy
      setTimeout(() => {
        vinyl_record.style.color = ThemeUIText
      }, 500)
    } else {
      vinyl_record.style.color = ThemeUIWrong
      setTimeout(() => {
        vinyl_record.style.color = ThemeUIText
      }, 500)
    }
  } else {
    vinyl_recordSkin()
    vinyl_record.style.color = ThemeUIBuy
      setTimeout(() => {
        vinyl_record.style.color = ThemeUIText
      }, 500)
  }
}

function vinyl_recordSkin() { click.style.background = "url(images/skins/vinyl_record.png) no-repeat center / cover"}
vinyl_record.addEventListener("click", boughtSkinVinyl_record)

function boughtSkinDonut() {
  if (skinBuy[7] != true) {
    if (money >= 56990) {
      money -= 56990
      randomSkinEnable = false
      skinBuy[7] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtDonutVisible.innerText = "✓"
      save()
      donutSkin()
      donut.style.color = ThemeUIBuy
      setTimeout(() => {
        donut.style.color = ThemeUIText
      }, 500)
    } else {
      donut.style.color = ThemeUIWrong
      setTimeout(() => {
        donut.style.color = ThemeUIText
      }, 500)
    }
  } else {
    donutSkin()
    donut.style.color = ThemeUIBuy
      setTimeout(() => {
        donut.style.color = ThemeUIText
      }, 500)
  }
}

function donutSkin() { click.style.background = "url(images/skins/donut.png) no-repeat center / cover" }
donut.addEventListener("click", boughtSkinDonut)

/////////////// Shop //////////////////

let disabledWindowShopAndBattle = false

function funShop() {
  shop.classList.toggle("shopContentToggle")
  r = Math.floor(Math.random() * (256)),
  g = Math.floor(Math.random() * (256)),
  b = Math.floor(Math.random() * (256)),
  color = '#' + r.toString(16) + g.toString(16) + b.toString(16)
  defaultSkin.style.background = ThemeClickUI
  noneBackground.style.background = ThemeUIHeader
  randomColorStatic.style.background = color
  if (disabledWindowShopAndBattle == false) {
    disabledWindowShopAndBattle = true
    battleIco.onclick = null
    battleIco.style.filter = "grayscale(70%)"
  } else {
    disabledWindowShopAndBattle = false
    battleIco.onclick = openBattleWindow
    battleIco.style.filter = "grayscale(0)"
  }
}
carts.onclick = funShop

function s1(sNum) {
  let shopBlocks = document.querySelectorAll(".shopBlock")
  shopBlocks.forEach(function(block) {
    block.classList.remove("shopActiveBlock")
  })
  let slideBlocks = document.getElementById("shopBlockId" + sNum)
  slideBlocks.classList.add("shopActiveBlock")
  if (sNum == 1) {
    selectSkins.style.borderColor = ThemeUIBasic
    selectBackgroundHeader.style.borderColor = ThemeUIAdd
    selectCursors.style.borderColor = ThemeUIAdd
  } else if (sNum == 2) {
    selectSkins.style.borderColor = ThemeUIAdd
    selectBackgroundHeader.style.borderColor = ThemeUIBasic
    selectCursors.style.borderColor = ThemeUIAdd
  } else if (sNum == 3) {
    selectSkins.style.borderColor = ThemeUIAdd
    selectBackgroundHeader.style.borderColor = ThemeUIAdd
    selectCursors.style.borderColor = ThemeUIBasic
  }
}

/////////////// Headers BG //////////////////
const BG = {
  noneBackground: document.getElementById("noneBackground"),
  sunset: document.getElementById("sunset"),
  starrySky: document.getElementById("starrySky"),
  ocean: document.getElementById("ocean"),
  stars: document.getElementById("stars"),
  c01: document.getElementById("c01"),
  rainbow: document.getElementById("rainbow"),
  planetEarth: document.getElementById("planetEarth"),
  paintBackground: document.getElementById("paintBackground"),
  lightTrail: document.getElementById("lightTrail"),
  minionsBackground: document.getElementById("minionsBackground")
}
selectSkins.style.borderColor = "#62B5BB"

BG.noneBackground.onclick = function() {
  header.style.background = ThemeUIHeader
  balance.style.color = ThemeUIText
  BG.noneBackground.style.color = ThemeUIBuy
  BG.noneBackground.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.noneBackground.style.color = ThemeUIText
      }, 500)
}

function sunsetActive() {
  if (backgroundHeaderBuy[0] != true) {
    if (money >= 200) {
      money -= 200
      backgroundHeaderBuy[0] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtSunBGVisible.innerText = "✓"
      save()
      sunBG()
      BG.sunset.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.sunset.style.color = ThemeUIText
      }, 500)
    } else {
      BG.sunset.style.color = ThemeUIWrong
      setTimeout(() => {
        BG.sunset.style.color = ThemeUIText
      }, 500)
    }
  } else {
    sunBG()
    BG.sunset.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.sunset.style.color = ThemeUIText
      }, 500)
  }
}

function sunBG() {
  header.style.background = "url(images/header/sunset.jpg) no-repeat center / cover"
  balance.style.color = "white"
}
BG.sunset.onclick = sunsetActive

function starrySkyActive() {
  if (backgroundHeaderBuy[1] != true) {
    if (money >= 999) {
      money -= 999
      backgroundHeaderBuy[1] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtStarrySkyBGVisible.innerText = "✓"
      save()
      starrySkyBG()
      BG.starrySky.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.starrySky.style.color = ThemeUIText
      }, 500)
    } else {
      BG.starrySky.style.color = ThemeUIWrong
      setTimeout(() => {
        BG.starrySky.style.color = ThemeUIText
      }, 500)
    }
  } else {
    starrySkyBG()
    BG.starrySky.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.starrySky.style.color = ThemeUIText
      }, 500)
  }
}

function starrySkyBG() {
  header.style.background = "url(images/header/starrySky.webp) no-repeat center / cover"
  balance.style.color = "white"
}
BG.starrySky.onclick = starrySkyActive

function oceanActive() {
  if (backgroundHeaderBuy[2] != true) {
    if (money >= 599) {
      money -= 599
      backgroundHeaderBuy[2] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtOceanBGVisible.innerText = "✓"
      save()
      oceanBG()
      BG.ocean.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.ocean.style.color = ThemeUIText
      }, 500)
    } else {
      BG.ocean.style.color = ThemeUIWrong
      setTimeout(() => {
        BG.ocean.style.color = ThemeUIText
      }, 500)
    }
  } else {
    oceanBG()
    BG.ocean.style.color = ThemeUIBuy
    setTimeout(() => {
      BG.ocean.style.color = ThemeUIText
    }, 500)
  }
}

function oceanBG() {
  header.style.background = "url(images/header/ocean.jpg) no-repeat center / cover"
  balance.style.color = "white"
}
BG.ocean.onclick = oceanActive

function starsActive() {
  if (backgroundHeaderBuy[3] != true) {
    if (money >= 1566) {
      money -= 1566
      backgroundHeaderBuy[3] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtStarsBGVisible.innerText = "✓"
      save()
      starsBG()
      BG.stars.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.stars.style.color = ThemeUIText
      }, 500)
    } else {
      BG.stars.style.color = ThemeUIWrong
      setTimeout(() => {
        BG.stars.style.color = ThemeUIText
      }, 500)
    }
  } else {
    starsBG()
    BG.stars.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.stars.style.color = ThemeUIText
      }, 500)
  }
}

function starsBG() {
  header.style.background = "url(images/header/stars.jpg) no-repeat center / cover"
  balance.style.color = "white"
}
BG.stars.onclick = starsActive

function c01Active() {
  if (backgroundHeaderBuy[4] != true) {
    if (money >= 2449) {
      money -= 2449
      backgroundHeaderBuy[4] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtc01BGVisible.innerText = "✓"
      save()
      c01BG()
      BG.c01.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.c01.style.color = ThemeUIText
      }, 500)
    } else {
      BG.c01.style.color = ThemeUIWrong
      setTimeout(() => {
        BG.c01.style.color = ThemeUIText
      }, 500)
    }
  } else {
    c01BG()
    BG.c01.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.c01.style.color = ThemeUIText
      }, 500)
  }
}

function c01BG() {
  header.style.background = "url(images/header/01c.webp) no-repeat center / cover"
  balance.style.color = "white"
}
BG.c01.onclick = c01Active

function rainbowActive() {
  if (backgroundHeaderBuy[5] != true) {
    if (money >= 2449) {
      money -= 2449
      backgroundHeaderBuy[5] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtRainbowBGVisible.innerText = "✓"
      save()
      rainbowBG()
      BG.rainbow.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.rainbow.style.color = ThemeUIText
      }, 500)
    } else {
      BG.rainbow.style.color = ThemeUIWrong
      setTimeout(() => {
        BG.rainbow.style.color = ThemeUIText
      }, 500)
    }
  } else {
    rainbowBG()
    BG.rainbow.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.rainbow.style.color = ThemeUIText
      }, 500)
  }
}

function rainbowBG() {
  header.style.background = "linear-gradient(to right, #ff5733, #ffbd33, #eaff33, #33ff9d, #338fff, #a833ff, #ff33c8)"
  header.style.backgroundSize = "200% 100%"
  header.style.animation = "rainbow 2s linear infinite"
  balance.style.color = "white"
}
BG.rainbow.onclick = rainbowActive

function planetEarthActive() {
  if (backgroundHeaderBuy[6] != true) {
    if (money >= 2567) {
      money -= 2567
      backgroundHeaderBuy[6] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtPlanetEarthBGVisible.innerText = "✓"
      save()
      planetEarthBG()
      BG.planetEarth.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.planetEarth.style.color = ThemeUIText
      }, 500)
    } else {
      BG.planetEarth.style.color = ThemeUIWrong
      setTimeout(() => {
        BG.planetEarth.style.color = ThemeUIText
      }, 500)
    }
  } else {
    planetEarthBG()
    BG.planetEarth.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.planetEarth.style.color = ThemeUIText
      }, 500)
  }
}

function planetEarthBG() {
  header.style.background = "url(images/header/planetEarth.jpg) no-repeat center / cover"
  balance.style.color = "white"
}
BG.planetEarth.onclick = planetEarthActive

function paintBackgroundActive() {
  if (backgroundHeaderBuy[7] != true) {
    if (money >= 3400) {
      money -= 3400
      backgroundHeaderBuy[7] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtPaintBackgroundBGVisible.innerText = "✓"
      save()
      paintBackgroundBG()
      BG.paintBackground.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.paintBackground.style.color = ThemeUIText
      }, 500)
    } else {
      BG.paintBackground.style.color = ThemeUIWrong
      setTimeout(() => {
        BG.paintBackground.style.color = ThemeUIText
      }, 500)
    }
  } else {
    paintBackgroundBG()
    BG.paintBackground.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.paintBackground.style.color = ThemeUIText
      }, 500)
  }
}

function paintBackgroundBG() {
  header.style.background = "url(images/header/paintBackground.jpg) no-repeat center / cover"
  balance.style.color = "white"
}
BG.paintBackground.onclick = paintBackgroundActive

function lightTrailActive() {
  if (backgroundHeaderBuy[8] != true) {
    if (money >= 2990) {
      money -= 2990
      backgroundHeaderBuy[8] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtLightTrailBGVisible.innerText = "✓"
      save()
      lightTrailBG()
      BG.lightTrail.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.lightTrail.style.color = ThemeUIText
      }, 500)
    } else {
      BG.lightTrail.style.color = ThemeUIWrong
      setTimeout(() => {
        BG.lightTrail.style.color = ThemeUIText
      }, 500)
    }
  } else {
    lightTrailBG()
    BG.lightTrail.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.lightTrail.style.color = ThemeUIText
      }, 500)
  }
}

function lightTrailBG() {
  header.style.background = "url(images/header/lightTrail.jpg) no-repeat center / cover"
  balance.style.color = "white"
}
BG.lightTrail.onclick = lightTrailActive

function minionsBackgroundActive() {
  if (backgroundHeaderBuy[9] != true) {
    if (money >= 1790) {
      money -= 1790
      backgroundHeaderBuy[9] = true
      balance.innerText = money.toLocaleString("fr-FR")
      boughtMinionsBackgroundBGVisible.innerText = "✓"
      save()
      minionsBackgroundBG()
      BG.minionsBackground.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.minionsBackground.style.color = ThemeUIText
      }, 500)
    } else {
      BG.minionsBackground.style.color = ThemeUIWrong
      setTimeout(() => {
        BG.minionsBackground.style.color = ThemeUIText
      }, 500)
    }
  } else {
    minionsBackgroundBG()
    BG.minionsBackground.style.color = ThemeUIBuy
      setTimeout(() => {
        BG.minionsBackground.style.color = ThemeUIText
      }, 500)
  }
}

function minionsBackgroundBG() {
  header.style.background = "url(images/header/minionsBackground.jpg) no-repeat center / cover"
  balance.style.color = "white"
}
BG.minionsBackground.onclick = minionsBackgroundActive

//////////// Battle Window \\\\\\\\\\\\
function openBattleWindow() {
  battleWindow.classList.toggle("openBattleWindow")
  if (disabledWindowShopAndBattle == false) {
    disabledWindowShopAndBattle = true
    carts.onclick = null
    carts.style.filter = "grayscale(70%)"
  } else {
    disabledWindowShopAndBattle = false
    carts.onclick = funShop
    carts.style.filter = "grayscale(0)"
  }
}
battleIco.onclick = openBattleWindow

function attackOctopus() {
  bossHearts -= damage
  save()
  hearts.innerText = bossHearts.toLocaleString("fr-FR")
  if (bossHearts <= 0) {
    octopus.onclick = null
    damage = 0
    document.getElementById("gradient").style.display = "inline-block"
    hearts.innerText = "New Skin"
  }
}
octopus.onclick = attackOctopus

function weaponBlockBuyOne() {
  if (weaponBuy[0] != true) {
    if (money >= 30000) {
      money -= 30000
      weaponBuy[0] = true
      damage = 15
      balance.innerText = money.toLocaleString("fr-FR")
      boughtWeaponPriceVisibleOne.innerText = "✓"
      save()
      weaponBlocks.one.style.borderColor = ThemeUIBuy
      setTimeout(() => {
        weaponBlocks.one.style.borderColor = ThemeUIBasic
      }, 500)
    } else {
      weaponBlocks.one.style.borderColor = ThemeUIWrong
      setTimeout(() => {
        weaponBlocks.one.style.borderColor = ThemeUIBasic
      }, 500)
    }
  } else {
    weaponBlocks.one.style.borderColor = ThemeUIWrong
    setTimeout(() => {
      weaponBlocks.one.style.borderColor = ThemeUIBasic
    }, 500)
  }
}
weaponBlocks.one.onclick = weaponBlockBuyOne

function weaponBlockBuyTwo() {
  if (weaponBuy[1] != true) {
    if (money >= 70000) {
      money -= 70000
      weaponBuy[0] = true
      weaponBuy[1] = true
      damage = 35
      balance.innerText = money.toLocaleString("fr-FR")
      boughtWeaponPriceVisibleTwo.innerText = "✓"
      save()
      weaponBlocks.two.style.borderColor = ThemeUIBuy
      setTimeout(() => {
        weaponBlocks.two.style.borderColor = ThemeUIBasic
      }, 500)
    } else {
      weaponBlocks.two.style.borderColor = ThemeUIWrong
      setTimeout(() => {
        weaponBlocks.two.style.borderColor = ThemeUIBasic
      }, 500)
    }
  } else {
    weaponBlocks.two.style.borderColor = ThemeUIWrong
    setTimeout(() => {
      weaponBlocks.two.style.borderColor = ThemeUIBasic
    }, 500)
  }
}
weaponBlocks.two.onclick = weaponBlockBuyTwo

function weaponBlockBuyThree() {
  if (weaponBuy[2] != true) {
    if (money >= 98000) {
      money -= 98000
      weaponBuy[0] = true
      weaponBuy[1] = true
      weaponBuy[2] = true
      damage = 44
      balance.innerText = money.toLocaleString("fr-FR")
      boughtWeaponPriceVisibleThree.innerText = "✓"
      save()
      weaponBlocks.three.style.borderColor = ThemeUIBuy
      setTimeout(() => {
        weaponBlocks.three.style.borderColor = ThemeUIBasic
      }, 500)
    } else {
      weaponBlocks.three.style.borderColor = ThemeUIWrong
      setTimeout(() => {
        weaponBlocks.three.style.borderColor = ThemeUIBasic
      }, 500)
    }
  } else {
    weaponBlocks.three.style.borderColor = ThemeUIWrong
    setTimeout(() => {
      weaponBlocks.three.style.borderColor = ThemeUIBasic
    }, 500)
  }
}
weaponBlocks.three.onclick = weaponBlockBuyThree

function weaponBlockBuyFour() {
  if (weaponBuy[3] != true) {
    if (money >= 111000) {
      money -= 111000
      weaponBuy[0] = true
      weaponBuy[1] = true
      weaponBuy[2] = true
      weaponBuy[3] = true
      damage = 60
      balance.innerText = money.toLocaleString("fr-FR")
      boughtWeaponPriceVisibleFour.innerText = "✓"
      save()
      weaponBlocks.four.style.borderColor = ThemeUIBuy
      setTimeout(() => {
        weaponBlocks.four.style.borderColor = ThemeUIBasic
      }, 500)
    } else {
      weaponBlocks.four.style.borderColor = ThemeUIWrong
      setTimeout(() => {
        weaponBlocks.four.style.borderColor = ThemeUIBasic
      }, 500)
    }
  } else {
    weaponBlocks.four.style.borderColor = ThemeUIWrong
    setTimeout(() => {
      weaponBlocks.four.style.borderColor = ThemeUIBasic
    }, 500)
  }
}
weaponBlocks.four.onclick = weaponBlockBuyFour

//////////// Themes \\\\\\\\\\\\
let themeWindowDisabled = true
let ThemeUIBuy = "lime"
let ThemeUIBasic = "#62B5BB"
let ThemeUIWrong = "red"
let ThemeUIAdd = "#62b5bb4b"
let ThemeClickUI = "linear-gradient(to bottom, #00eaa8, #00a7f2)"
let ThemeUIText = "white"
let ThemeUIHeader = "#090B10"

themeIco.onclick = () => {
  if (themeWindowDisabled) {
    themeWindow.style.display = "block"
    themeWindowDisabled = false
  } else {
    themeWindow.style.display = "none"
    themeWindowDisabled = true
  }
}

darkTheme.onclick = () => {
  ThemeUIHeader = "#090B10"
  header.style.background = ThemeUIHeader
  document.body.style.background = "#0F111A"
  document.body.style.color = "white"
  shop.style.background = "#0F111A"
  battleWindow.style.background = "#0F111A"
  themeWindow.style.background = "#0F111A"
  balance.style.color = "ghostwhite"
}

lightTheme.onclick = () => {
  ThemeUIHeader = "#f0f0f0"
  header.style.background = ThemeUIHeader
  document.body.style.background = "#dfdfdf"
  document.body.style.color = "black"
  shop.style.background = "#dfdfdf"
  battleWindow.style.background = "#dfdfdf"
  themeWindow.style.background = "#dfdfdf"
  balance.style.color = "black"
  ThemeUIText = "black"
}

defaultTheme.onclick = () => {
  ThemeUIBuy = "lime"
  ThemeUIBasic = "#62B5BB"
  ThemeUIWrong = "red"
  ThemeUIAdd = "#62b5bb4b"
  ThemeClickUI = "linear-gradient(to bottom, #00eaa8, #00a7f2)"
  themeActivation()
}

oldTheme.onclick = () => {
  ThemeUIBuy = "limegreen"
  ThemeUIBasic = "yellow"
  ThemeUIWrong = "red"
  ThemeUIAdd = "#ffff004d"
  ThemeClickUI = "linear-gradient(to bottom, yellow, limegreen)"
  themeActivation()
}

violetToPink.onclick = () => {
  ThemeUIBuy = "deeppink"
  ThemeUIBasic = "violet"
  ThemeUIWrong = "red"
  ThemeUIAdd = "#7f00ff4d"
  ThemeClickUI = "linear-gradient(to bottom, violet, pink)"
  themeActivation()
}

redToPurple.onclick = () => {
  ThemeUIBuy = "lime"
  ThemeUIWrong = "rebeccapurple"
  ThemeUIBasic = "#ee2727"
  ThemeUIAdd = "#ee27274d"
  ThemeClickUI = "linear-gradient(to bottom, #ee2727, rebeccapurple)"
  themeActivation()
}

GDkaV5.onclick = () => {
  ThemeUIBuy = "lime"
  ThemeUIWrong = "red"
  ThemeUIBasic = "#94bbe9"
  ThemeUIAdd = "94bbe94d"
  ThemeClickUI = "linear-gradient(to bottom, #94bbe9, #eeaeca)"
  themeActivation()
}

GDkaV6.onclick = () => {
  ThemeUIBuy = "lime"
  ThemeUIWrong = "#df7a95"
  ThemeUIBasic = "#ff8000"
  ThemeUIAdd = "#ff80004d"
  ThemeClickUI = "linear-gradient(to bottom, #ff8000, #df7a95)"
  themeActivation()
}

function themeActivation() {
  header.style.background = ThemeUIHeader
  header.style.borderColor = ThemeUIBasic
  click.style.background = ThemeClickUI
  click.style.backgroundSize = "cover"
  buy.style.borderColor = ThemeUIBasic
  buyOne.style.borderColor = ThemeUIBasic
  buyTwo.style.borderColor = ThemeUIBasic
  buyThree.style.borderColor = ThemeUIBasic
  themeWindow.style.borderColor = ThemeUIBasic
  shop.style.borderColor = ThemeUIBasic
  selectSkins.style.borderColor = ThemeUIBasic
  selectBackgroundHeader.style.borderColor = ThemeUIAdd
  selectCursors.style.borderColor = ThemeUIAdd
  battleWindow.style.borderColor = ThemeUIBasic
  weaponBuyOne.style.borderColor = ThemeUIBasic
  weaponBuyTwo.style.borderColor = ThemeUIBasic
  weaponBuyThree.style.borderColor = ThemeUIBasic
  weaponBuyFour.style.borderColor = ThemeUIBasic
  document.querySelectorAll('.cursorCard').forEach(function(CCCbg) {
    CCCbg.style.background = ThemeUIBasic
  })
}

let cursorEffectType = "clickEffectCircle"
let = cursorColorDefault = ThemeUIBasic

cursorRemove.onclick = () => { cursorEffectType = undefined }
cursorColor.onchange = () => { cursorColorDefault = cursorColor.value }
cursorCircle.onclick = () => { cursorEffectType = "clickEffectCircle" }
cursorStar.onclick = () => { cursorEffectType = "clickEffectStar" }

document.addEventListener("click", function(e) {
  let element = document.createElement("div")
  element.classList.add("clickEffect", cursorEffectType)
  element.setAttribute("data-id", "cursorElement")
  element.style.left = e.clientX + "px"
  element.style.top = e.clientY + "px"
  element.style.zIndex = "3"
  element.style.backgroundColor = cursorColorDefault
  document.body.appendChild(element)
  setTimeout(() => {
    element.remove()
  }, 500)
})

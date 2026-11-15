namespace SpriteKind {
    export const largeSpikeHitbox = SpriteKind.create()
    export const smallSpikeHitbox = SpriteKind.create()
    export const title = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.smallSpikeHitbox, function (sprite, otherSprite) {
    if (!(deadthded)) {
        deathded()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.largeSpikeHitbox, function (sprite, otherSprite) {
    if (!(deadthded)) {
        deathded()
    }
})
function refreshGame () {
    deadthded = false
    music.stopAllSounds()
    scene.setBackgroundImage(assets.image`bg`)
    scroller.setCameraScrollingMultipliers(0.2, 0.2)
    cube = sprites.create(assets.image`cube0`, SpriteKind.Player)
    animation.runImageAnimation(
    cube,
    assets.animation`cube0rotate`,
    33,
    true
    )
    tiles.setCurrentTilemap(tilemap`stereo1`)
    cube.setPosition(0, 430)
    cube.vx = 166
    cube.ay = 1440
    for (let value of tiles.getTilesByType(assets.tile`largeSpike`)) {
        largeSpikeHitbox2 = sprites.create(assets.image`largeSpikeHitbox`, SpriteKind.largeSpikeHitbox)
        tiles.placeOnTile(largeSpikeHitbox2, value)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`smallSpike`)) {
        smallSpriteHitbox = sprites.create(assets.image`smallSpikeHitbox`, SpriteKind.smallSpikeHitbox)
        tiles.placeOnTile(smallSpriteHitbox, value2)
    }
    _("level colors")
    color.setColor(6, color.parseColorString("001084"))
    color.setColor(9, color.parseColorString("0042C6"))
    _("icon colors")
    color.setColor(7, color.parseColorString(colors[41]))
    color.setColor(8, color.parseColorString(colors[44]))
    color.setColor(2, color.parseColorString(colors[15]))
    music.play(pianoRoll.createSong(assets.song`stereo1`), music.PlaybackMode.InBackground)
}
function _ (text: string) {
	
}
function createColors () {
    colors = [
    "6B6B6B",
    "001084",
    "08008C",
    "42007B",
    "63005A",
    "6B0010",
    "600000",
    "4F3500",
    "314E18",
    "005A21",
    "215A10",
    "085242",
    "003973",
    "000000",
    "000000",
    "000000",
    "A5A5A5",
    "0042C6",
    "4229CE",
    "6B00BD",
    "942994",
    "9C1042",
    "9C3900",
    "845E21",
    "5F7B21",
    "2D8C29",
    "188E10",
    "2E8663",
    "29739C",
    "000000",
    "000000",
    "000000",
    "EFEFEF",
    "5A8CFF",
    "7B6BFF",
    "A55AFF",
    "D64AFF",
    "E7639C",
    "DE7B52",
    "CE9C29",
    "FFDA31",
    "7BCE31",
    "5ACE52",
    "4AC694",
    "4AB5CE",
    "525252",
    "000000",
    "000000",
    "EFEFEF",
    "ADC6FF",
    "BDBDFF",
    "CEB5FF",
    "E7B5FF",
    "F9BBDF",
    "F7C6B5",
    "DEC69C",
    "D6D694",
    "C6E79C",
    "B5E7AD",
    "ADE7C6",
    "ADDEE7",
    "ADADAD",
    "000000",
    "000000"
    ]
}
function deathded () {
    deadthded = true
    cube.vy = 0
    cube.vx = 0
    cube.ay = 0
    music.stopAllSounds()
    animation.runImageAnimation(
    cube,
    assets.animation`explode`,
    66,
    false
    )
    music.play(music.createSoundEffect(WaveShape.Noise, 3373, 171, 255, 0, 330, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 3373, 171, 255, 0, 330, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 3373, 171, 255, 0, 330, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 3373, 171, 255, 0, 330, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 3373, 171, 255, 0, 330, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    music.play(music.createSoundEffect(WaveShape.Noise, 3373, 171, 255, 0, 330, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    sprites.destroy(cube)
    pause(100)
    refreshGame()
}
let colors: string[] = []
let smallSpriteHitbox: Sprite = null
let largeSpikeHitbox2: Sprite = null
let cube: Sprite = null
let deadthded = false
let subtitleText: fancyText.TextSprite = null
let titleText: Sprite = null
let warningText: fancyText.TextSprite = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320;
    export const ARCADE_SCREEN_HEIGHT = 240;
}
let inGame = false
let doTitle = true
createColors()
if (doTitle) {
    scene.setBackgroundImage(assets.image`warningScreen`)
    color.setColor(11, color.rgb(0, 0, 0))
    fancyText.draw("Screen Resolution Warning", scene.backgroundImage(), 16, 20, 0, 1, fancyText.geometric_sans_6)
    warningText = fancyText.create("This game is designed to be viewed at a resolution of 320x240. It is recommended to play this on an online simulator as any hardware might show only a portion of the screen.\\n\\n        Press A to Continue", 150, 1, fancyText.tiny_4)
    warningText.x = 83
    warningText.y = 60
    fancyText.setLineHeight(warningText, 5)
    music.play(pianoRoll.createSong(assets.song`schemingweasel`), music.PlaybackMode.LoopingInBackground)
    pauseUntil(() => controller.A.isPressed())
    sprites.destroy(warningText)
    color.setPalette(
    color.originalPalette
    )
    music.stopAllSounds()
    scene.setBackgroundImage(assets.image`bg`)
    scene.setBackgroundColor(6)
    titleText = sprites.create(assets.image`logo`, SpriteKind.title)
    titleText.setPosition(82, 20)
    subtitleText = fancyText.create("Press A to Begin", 0, fancyText.twoToneColor(9, 12), fancyText.outline_two_tone_12)
    subtitleText.setPosition(68, 40)
    music.play(pianoRoll.createSong(assets.song`menu1`), music.PlaybackMode.LoopingInBackground)
    pauseUntil(() => !(controller.A.isPressed()))
    pauseUntil(() => controller.A.isPressed())
    music.stopAllSounds()
    sprites.destroy(titleText)
    sprites.destroy(subtitleText)
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.UntilDone)
}
inGame = true
refreshGame()
game.onUpdate(function () {
    pauseUntil(() => inGame)
    scene.centerCameraAt(cube.x + 60, cube.y + 50)
    if (cube.vy == 0 && !(deadthded)) {
        cube.setImage(assets.image`cube0`)
    }
    if (cube.vx == 0 && !(deadthded)) {
        deathded()
    }
})
forever(function () {
    pauseUntil(() => inGame)
    if (controller.A.isPressed()) {
        if (cube.vy == 0) {
            cube.vy = -300
        }
    }
})

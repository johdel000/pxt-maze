let mySprite: Sprite = null
scene.setTileMap(img`
2 f f f f f f f f 2 
2 . . . . . . . . 2 
2 2 2 . . . . . f 2 
f . 2 . . . . f f 2 
f . . . . . . f . 2 
f . . 2 2 2 2 2 . 2 
f . . . . 2 2 2 . 2 
f f f f f f f f f 2 
`)
scene.setTileMap(img`
2 f f f f f f f f 2 
2 . . . . . . . . 2 
2 2 2 . . . . . f 2 
f . 2 . . . . f f 2 
f . . . . . . f . 2 
f . . 2 2 2 2 2 . 2 
f . . . . 2 2 2 . 2 
f f f f f f f f f 2 
`)
scene.setTile(8, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
scene.cameraFollowSprite(mySprite)
mySprite = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 f f f f f f f f f f f f 2 f 
f 2 f 2 2 2 2 2 2 2 2 2 2 f 2 f 
f 2 f 2 f f f f f f f f 2 f 2 f 
f 2 f 2 f 2 2 2 2 2 2 f 2 f 2 f 
f 2 f 2 f 2 f f f f 2 f 2 f 2 f 
f 2 f 2 f 2 f 8 8 f 2 f 2 f 2 f 
f 2 f 2 f 2 f 8 8 f 2 f 2 f 2 f 
f 2 f 2 f 2 f f f f 2 f 2 f 2 f 
f 2 f 2 f 2 2 2 2 2 2 f 2 f 2 f 
f 2 f 2 f f f f f f f f 2 f 2 f 
f 2 f 2 2 2 2 2 2 2 2 2 2 f 2 f 
f 2 f f f f f f f f f f f f 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Player)

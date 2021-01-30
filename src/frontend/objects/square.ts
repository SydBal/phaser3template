export default class Square extends Phaser.Physics.Matter.Sprite {

    constructor(scene: Phaser.Scene) {
      super(scene.matter.world, -500,-500,"square")
      scene.add.existing(this)
        this.angle = Math.random() * 360
        this.setBounce(.7)
        this.setScale(.1 + Math.random() * .5)
        let color = new Phaser.Display.Color()
        color.random(180)
        this.setTint(color.color)
        this.setFriction(.9)
      }

      //server will set the position after first connect
      setPos(x: number,y: number){
        this.x = x
        this.y = y
      }
  }
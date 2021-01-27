
import io from 'socket.io-client'

export default class SceneLogin extends Phaser.Scene {
 
    socket: any
    block: any

    constructor() {
    super('LoginScene')
  }

  init(data: any) { }
  preload() {
      this.load.image("player", "assets/player.png")
   }

  create() {

    this.matter.world.setBounds(0,0,1024,750, 50,true, true, false, true)
    
      this.socket = io()
      this.socket.on("first hi", (msg: any)=>{
          console.log("connected: ", msg)
      })

        for(let i = 0; i< 200; i++){
          let p: Phaser.Physics.Matter.Sprite = this.matter.add.sprite(500,-200*i, "player")
          p.angle=Math.random()*360
          p.setBounce(.7)
          p.setScale(.25)
          let color = new Phaser.Display.Color();
          color.random(180);
          p.setTint(color.color);
        }
        
        this.block = this.matter.add.sprite(512,400,"player")
        this.block.setStatic(true)
        this.block.setScale(4.5)
   
  }

  update(){
    this.block.angle+=2.5
  }
}
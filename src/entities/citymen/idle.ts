import { SpriteBase } from "../base";
import { createImage } from "../../helpers/createImage";
import { gameInstance } from "../../gameInstance";
import { Direction } from "../../enums/direction";

export class ManIdle extends SpriteBase {
  image: HTMLImageElement = null;

  constructor() {
    super(0, 5, 128, 128, 6);
    this.image = createImage("../../assets/citymen/idle.png");
  }

  update(): void {
    if (gameInstance.currDirection === Direction.forward) {
      this.image = createImage("../../assets/citymen/idle.png");
    } else {
      this.image = createImage("../../assets/citymen/idle-flip.png");
    }
  }

  render(posX: number, posY: number): void {
    const spriteInfo = this.getSprite();
    gameInstance.context.drawImage(
      this.image,
      spriteInfo.x,
      spriteInfo.y,
      spriteInfo.width,
      spriteInfo.height,
      posX,
      posY,
      spriteInfo.width,
      spriteInfo.height
    );
  }
}

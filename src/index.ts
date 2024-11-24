import { GamePlay } from "./gamePlay";
import { gameInstance } from "./gameInstance";
import { Direction } from "./enums/direction";

export function main() {
  const eleBound = document.body.getBoundingClientRect();

  let canvas = document.body.getElementsByTagName("canvas")[0];
  !canvas && (canvas = document.createElement("canvas"));

  const context = canvas.getContext("2d");
  const viewportWidth = eleBound.width;
  const viewportHeight = eleBound.height;

  document.body.appendChild(canvas);
  canvas.setAttribute("width", viewportWidth.toString());
  canvas.setAttribute("height", viewportHeight.toString());

  gameInstance.initContext(context!);
  gameInstance.updateViewport({
    width: viewportWidth,
    height: viewportHeight,
  });

	(new GamePlay()).run();

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 37) {
      gameInstance.updateDirection(Direction.backward);
    } 
    if (evt.keyCode === 39) {
      gameInstance.updateDirection(Direction.forward);
    }
  })

}

main();
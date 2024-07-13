import { CONNECTION } from "./constants";
import { initiateJupiterSwap } from "./jupiter";

async function main() {
  CONNECTION.onSlotChange(async (slotObject) => {
    // TODO: UNCOMMENT THIS FOR PROD
    // if (slotObject.slot === 277530425) {
    //   console.log("Slot 277530425 reached");
    // }

    while (true) {
      await initiateJupiterSwap();
    }
  });
}

main();

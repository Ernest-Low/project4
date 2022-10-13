import $ from "jquery";

import jsoninit from "./screens/modules/jsoninit.js";
import mainScreen from "./screens/mainscreen.js";

//  Back blackscreen
$("body").append(
  $("<div>").attr("id", "blackscreen").css({
    "z-index": -1,
    width: "80vw",
    "aspect-ratio": "16 / 9",
    overflow: "hidden",
    // "padding-top": "56.25%",
    // height: "95vh",
    border: "4px solid blue",
    position: "absolute",
    "background-color": "rgba(0,0,0,1)",
  })
);

jsoninit();
mainScreen(); // Initialize Mainscreen

//  Creates the actionText module into the longpanel
import $ from "jquery";

const create_actionText = () => {
  const $textpanel = $("<h4>")
    .attr("id", "actiontext")
    .css({
      color: "ghostwhite",
      "font-family": "Alagard",
      "font-size": "2vw",
      "word-wrap": "break-word",
    })
    .text("");

  $("#longpanel").append($textpanel);
};

export default create_actionText;

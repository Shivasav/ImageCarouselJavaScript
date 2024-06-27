"use strict";

$(document).ready(() => {
  const slider = $("#image_list"); // slider = ul element
  let leftProperty = 0;
  let newLeftProperty = 0;

  // the click event handler for the right button
  $("#right_button").click(() => {
    // get value of current left property
    leftProperty = parseInt(slider.css("left"));

    // determine new value of left property
    if (leftProperty - 300 <= -900) {
      newLeftProperty = 0;
    } else {
      newLeftProperty = leftProperty - 300;
    }

    // use the animate function to change the left property
    slider.animate({ left: newLeftProperty }, 1000);
  }); // end click

  // the click event handler for the left button
  $("#left_button").click(() => {
    // get value of current right property
    leftProperty = parseInt(slider.css("left"));

    // determine new value of left property
    if (leftProperty < 0) {
      newLeftProperty = leftProperty + 300;
    } else {
      newLeftProperty = 0;
    }

    // use the animate function to change the left property
    slider.animate({ left: newLeftProperty }, 1000);
  }); // end click

  // the click event handler for the <a> elements in the list
  $("#image_list li a").click(function (event) {
    event.preventDefault(); // prevent the default action of the link

    const imageUrl = $(this).attr("href"); // get the URL for the enlarged image
    const imageElement = $("#image"); // get the enlarged image element

    // animate the current image to fade out and slide to the left
    imageElement.animate({ opacity: 0, marginLeft: "-205px" }, 1000, () => {
      // set the URL for the enlarged image
      imageElement.attr("src", imageUrl);

      // reverse the animation and animate the new image to fade in
      imageElement.animate({ opacity: 1, marginLeft: "100px" }, 1000);
    });
  });
}); // end ready

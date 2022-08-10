let selectedButton;
let projectTiles;

document.addEventListener("DOMContentLoaded", main);

function main() {
  const portfolioButtons = document.getElementsByClassName("portfolioButtons");
  projectTiles = document.getElementsByClassName("projectTile");

  selectedButton = document.getElementById("buttonSelected");

  //Binds Buttons;
  for (let i = 0; i < portfolioButtons.length; i++) {
    const element = portfolioButtons[i];
    element.addEventListener("click", () => buttonSelected(element));
  }
}

function buttonSelected(button) {
  if (selectedButton != null) {
    selectedButton.id = "";
  }

  if (selectedButton == button) {
    selectedButton.id = "";
    selectedButton = null;
    SortProjectTiles();
    return;
  }

  selectedButton = button;
  selectedButton.id = "buttonSelected";

  SortProjectTiles();
}

function SortProjectTiles(overload) {
  for (let i = 0; i < projectTiles.length; i++) {
    const element = projectTiles[i];
    if (selectedButton == null) {
      element.id = "";
      continue;
    }

    const tags = element.getAttribute("tags");
    console.log(tags + " :: " + String(selectedButton.value));
    if (tags.includes(String(selectedButton.value))) {
      element.id = "";
      continue;
    }
    console.log("element Hidden");
    element.id = "hidden";
  }
}

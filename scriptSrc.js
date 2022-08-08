let selectedButton;

document.addEventListener("DOMContentLoaded", main);

function main() {
  const portfolioButtons = document.getElementsByClassName("portfolioButtons");
  selectedButton = document.getElementById("buttonSelected");

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
    return;
  }

  selectedButton = button;
  selectedButton.id = "buttonSelected";
}

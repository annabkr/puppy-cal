const renderButtons = () => {
  const names = ["Meals", "Weight", "Exercise"];

  for (const i in names) {
    console.log(`Creating button with name: ${names[i]}`);
    renderButton(names[i]);
  }
};

const renderButton = (name) => {
  const button = document.createElement("button");
  const text = document.createTextNode(name);
  const wrapper = document.getElementById("grid-wrapper");
  button.appendChild(text);
  wrapper.appendChild(button);
};

renderButtons();

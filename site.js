const meals = Array();

meals.push("Kibble");

const onClickMeals = () => {
  let element = document.getElementById("content");
  element.innerHTML = `
  <h1>Meals</h1>
  </br>
  Add your meals below.
  ${meals}`;
};

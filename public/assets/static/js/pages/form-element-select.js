let choices = document.querySelectorAll(".choices")

window.choicesInstances = window.choicesInstances || {}

for (let i = 0; i < choices.length; i++) {
  let initChoice
  if (choices[i].classList.contains("multiple-remove")) {
    initChoice = new Choices(choices[i], {
      delimiter: ",",
      editItems: true,
      maxItemCount: -1,
      removeItemButton: true,
    })
  } else {
    initChoice = new Choices(choices[i])
  }

  if (choices[i].id) {
    window.choicesInstances[choices[i].id] = initChoice
  }
}

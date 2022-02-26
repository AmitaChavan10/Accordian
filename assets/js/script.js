// const container = Array.from(document.querySelectorAll(".accordion-container"))

// for (i = 0; i < container.length; i++) {
//   container[i].addEventListener("click", function () {
//     this.classList.toggle("active")
//   })
// }

const container = Array.from(
  document.getElementsByClassName("accordion-container")
)

const label = Array.from(document.getElementsByClassName("label"))

for (i = 0; i < label.length; i++) {
  label[i].addEventListener("click", toggle)
}

function toggle() {
  var itemClass = this.parentNode.className
  for (i = 0; i < container.length; i++) {
    container[i].className = "accordion-container close"
  }
  if (itemClass == "accordion-container close") {
    this.parentNode.className = "accordion-container active"
  }
}

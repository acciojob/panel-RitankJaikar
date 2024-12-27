//your JS code here. If required.
//your JS code here. If required.
const panels = document.querySelectorAll(".panel");
let currentActive= panels[0];

panels.forEach(panel => {
	panel.addEventListener("click", () => {
		if(currentActive !== panel) {
			panel.classList.add("active");
			currentActive.classList.remove("active");
			currentActive= panel;
		}
	})
})
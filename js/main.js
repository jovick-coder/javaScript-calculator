

let body = document.getElementById("body");
let label = document.getElementById("label");
body.setAttribute("mode", "light");
label.innerHTML = "Dark Mode";

const change = () => {
    let attribute_value = body.getAttribute("mode");
    if (attribute_value === 'light') {
        console.log('light mode on');
        body.setAttribute("mode", "dark");
        body.setAttribute("class", "dark-mode");
        label.innerHTML = "Light Mode";

    } else {
        console.log('dark mode on');
        body.setAttribute("mode", "light");
        body.setAttribute("class", "light-mode");
        label.innerHTML = "Dark Mode";

    }


}


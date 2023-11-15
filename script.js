
const cities = document.querySelectorAll("svg path");

// loop for adding event to all map elements
for (var i = 0; i < cities.length; i++) {
    const currentCity = cities[i];

    // add click event
    currentCity.addEventListener("click", function (event) {
        const thisElement = event.target;
        const cityData = {
            "city": thisElement.getAttribute("title"),
            "cityLabel": thisElement.children[0].innerHTML
        }

        console.log(cityData)
    });

}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
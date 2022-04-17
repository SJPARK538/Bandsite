
const apiKey = "4498b71c-654e-415a-a34f-51f66fdd839f";

// Function Start
function renderTable(arr){
     // a container that includes everything
    let tableContainer = document.querySelector(".shows__container");

    // --------------------------------------Tablet & Desktop-------------------------------//

    let headerContainer = document.createElement("div");
    headerContainer.classList.add("shows__header");
    tableContainer.appendChild(headerContainer);

    // Inside Header(Date, Venue, Location, button)
    // Date
    let dateHeader = document.createElement("h3");
    dateHeader.classList.add("shows__header-date");
    headerContainer.appendChild(dateHeader);
    dateHeader.innerText = "DATE";

    // Venue
    let venueHeader = document.createElement("h3");
    venueHeader.classList.add("shows__header-venue");
    headerContainer.appendChild(venueHeader);
    venueHeader.innerText = "VENUE";

    // Location
    let locationHeader = document.createElement("h3");
    locationHeader.classList.add("shows__header-location");
    headerContainer.appendChild(locationHeader);
    locationHeader.innerText = "LOCATION";

    let buttonHeader = document.createElement("h3");
    buttonHeader.classList.add("shows__header-button");
    headerContainer.appendChild(buttonHeader);
    

    // -----------------------------------------ALL------------------------------------------//
    for (let i = 0; i < arr.length; i++){
       // Content
    let contentContainer = document.createElement("div");
    contentContainer.classList.add("shows__content");  
    tableContainer.appendChild(contentContainer);
    
    let schedules = document.querySelectorAll(".shows__content");
    schedules[i].addEventListener("click", (event) => {

// --------------------------------------Active State--------------------------------------//
        let select = document.querySelector(".active");
        if (select !== null){
            select.classList.remove("active");
        }
        schedules[i].classList.add("active");
});


/////////////////////////////////////////////////////////////////////////////////////////////
    
    // Inside Header(Date, Venue, Location, button)
    // Date
    let dateHeader = document.createElement("h3");
    dateHeader.classList.add("shows__content-label");
    contentContainer.appendChild(dateHeader);
    dateHeader.innerText = "DATE";

    let date = document.createElement("p");
    date.classList.add("shows__content-label--date");
    contentContainer.appendChild(date);
    let dataDates = new Date(+arr[i]["date"]);
    date.innerText = (dataDates.toDateString());

    // Venue
    let venueHeader = document.createElement("h3");
    venueHeader.classList.add("shows__content-label");
    contentContainer.appendChild(venueHeader);
    venueHeader.innerText = "VENUE";

    let venue = document.createElement("p");
    venue.classList.add("shows__content-label--venue")
    contentContainer.appendChild(venue);
    venue.innerText = arr[i]["place"];

    // Location
    let locationHeader = document.createElement("h3");
    locationHeader.classList.add("shows__content-label");
    contentContainer.appendChild(locationHeader);
    locationHeader.innerText = "LOCATION";

    let location = document.createElement("p");
    location.classList.add("shows__content-label--location")
    contentContainer.appendChild(location);
    location.innerText = arr[i]["location"];

    // Button
    let buttonHeader = document.createElement("h3");
    buttonHeader.classList.add("shows__content-btn-container");
    contentContainer.appendChild(buttonHeader);
    

    let button = document.createElement("button");
    button.classList.add("shows__content-label--button");
    buttonHeader.appendChild(button);
    button.innerText = "BUY TICKET";
}
}

let showdates = axios.get(
    "https://project-1-api.herokuapp.com/showdates?api_key=4498b71c-654e-415a-a34f-51f66fdd839f"
    );

    showdates.then(response =>{
    renderTable(
        response.data
    )
    })



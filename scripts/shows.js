let tables = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Mon Sept 06 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]
// Function Start
function table(arr){
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

    // Inside Header(Date, Venue, Location, button)
    // Date
    let dateHeader = document.createElement("h3");
    dateHeader.classList.add("shows__content-label");
    contentContainer.appendChild(dateHeader);
    dateHeader.innerText = "DATE";

    let date = document.createElement("p");
    date.classList.add("shows__content-label--date")
    contentContainer.appendChild(date);
    date.innerText = arr[i]["date"];

    // Venue
    let venueHeader = document.createElement("h3");
    venueHeader.classList.add("shows__content-label");
    contentContainer.appendChild(venueHeader);
    venueHeader.innerText = "VENUE";

    let venue = document.createElement("p");
    venue.classList.add("shows__content-label--venue")
    contentContainer.appendChild(venue);
    venue.innerText = arr[i]["venue"];

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
table(tables);


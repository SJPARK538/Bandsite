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

// Functino Start
function table(arr){
    for (let i = 0; i < arr.length; i++){
     // a container that includes everything
    let tableContainer = document.querySelector(".shows__container");
    
    // Header
    let contentContainer = document.createElement("div");
    contentContainer.classList.add("shows__content");
    tableContainer.appendChild(contentContainer);

    // Inside Header(Date, Venue, Location, button)
    // Date
    let dateHeader = document.createElement("h3");
    dateHeader.classList.add("shows__header-date");
    contentContainer.appendChild(dateHeader);
    dateHeader.innerText = "DATE";

    // Venue
    let venueHeader = document.createElement("h3");
    venueHeader.classList.add("shows__header-venue");
    contentContainer.appendChild(venueHeader);
    venueHeader.innerText = "VENUE";

    // Location
    let locationHeader = document.createElement("h3");
    locationHeader.classList.add("shows__header-location");
    contentContainer.appendChild(locationHeader);
    locationHeader.innerText = "LOCATION";

    // Button
    let buttonHeader = document.createElement("button");
    buttonHeader.classList.add("shows__header-button");
    contentContainer.appendChild(buttonHeader);
    buttonHeader.innerText = "BUY TICKET";

    // Data InputField
    let date = document.createElement("p");
    date.classList.add("shows__header-date--value")
    dateHeader.appendChild(date);
    date.innerText = arr[i]["date"];

    let venue = document.createElement("p");
    venue.classList.add("shows__header-venue--value")
    venueHeader.appendChild(venue);
    venue.innerText = arr[i]["venue"];
    
    let location = document.createElement("p");
    location.classList.add("shows__header-location--value")
    locationHeader.appendChild(location);
    location.innerText = arr[i]["location"];
}
}
table(tables);
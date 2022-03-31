// Comment Array
let comments = [
    {
        name: "Connor Walton",
        date: "02/17/2021",
        comment:
        "This is art. This is inexplicable magic express in the puret way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Emilie Beach",
        date: "01/09/2021",
        comment:
        "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Miles Acosta",
        date: "12/20/2021",
        comment:
        "I can't stop listening. Every time I hear one of their songs- the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]

// Function Start
function displayComments(arr){
    let commentContainer = document.querySelector(".comment__default-comment");
    for (let i = 0; i < arr.length; i++){
        // /contain all my default content
        let defaultContainer = document.createElement("div");    
        defaultContainer.classList.add("comment__default")
        commentContainer.appendChild(defaultContainer);

        // image container
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("comment__image-container");
        defaultContainer.appendChild(imageContainer);

        // content container
        let contentContainer = document.createElement("div");
        contentContainer.classList.add("comment__content-container")
        defaultContainer.appendChild(contentContainer);

        // header container 
        let headerContainer = document.createElement("div");
        headerContainer.classList.add("comment__content-header");
        contentContainer.appendChild(headerContainer);

        // Image 
        let image = document.createElement("div");
        image.classList.add("comment__image-container--image");
        imageContainer.appendChild(image);

        // Name
        let name = document.createElement("h2");
        name.classList.add("comment__content-header--name");
        name.innerText = arr[i]["name"];
        headerContainer.appendChild(name);
        
        // Date
        let date = document.createElement("div");
        date.classList.add("comment__content-header--date");
        date.innerText = arr[i]["date"];
        headerContainer.appendChild(date);

        // comment text container
        let textContainer = document.createElement("div");
        textContainer.classList.add("comment__text-container");
        contentContainer.appendChild(textContainer);

        // comment
        let comment = document.createElement("p");
        comment.classList.add("comment__text-container--comment")
        comment.innerText = arr[i]["comment"];
        textContainer.appendChild(comment);
    }
}

displayComments(comments);

// DOM API -> to form in html
const form = document.querySelector('.comment__inputbox');

form.addEventListener("submit", event => {
    event.preventDefault();

    const newName = event.target.name.value;
    const newComment = event.target.comment.value;

    
    const newDate = new Date();
    let month =  String(newDate.getMonth()+1).padStart(2, '0');
    let day =String(newDate.getDate()).padStart(2, '0');
    let year = newDate.getFullYear().toString();

    const today = month + "/" + day + "/" + year;

    displayComments([{name: newName, date: today, comment: newComment }])

    form.reset();
});



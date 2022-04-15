const apiKey = "4498b71c-654e-415a-a34f-51f66fdd839f";
// https://project-1-api.herokuapp.com/?api_key=4498b71c-654e-415a-a34f-51f66fdd839f


function displayComments(arr){
    let commentContainer = document.querySelector(".comment__default-comment");
    commentContainer.innerHTML="";

    for (let i = 0; i < arr.length; i++){
        
        let defaultContainer = document.createElement("div");    
        defaultContainer.classList.add("comment__default")
        commentContainer.appendChild(defaultContainer);

        let imageContainer = document.createElement("div");
        imageContainer.classList.add("comment__image-container");
        defaultContainer.appendChild(imageContainer);

        let contentContainer = document.createElement("div");
        contentContainer.classList.add("comment__content-container")
        defaultContainer.appendChild(contentContainer);
    
        let headerContainer = document.createElement("div");
        headerContainer.classList.add("comment__content-header");
        contentContainer.appendChild(headerContainer);
        
        let image = document.createElement("div");
        image.classList.add("comment__image-container--image");
        imageContainer.appendChild(image);
    
        let name = document.createElement("h2");
        name.classList.add("comment__content-header--name");
        name.innerText = arr[i]["name"];
        headerContainer.appendChild(name);

        let newDate = new Date(arr[i]["timestamp"]);
        let todayString =
        newDate.getUTCMonth() + 1 + "/" + newDate.getUTCDate() + "/" + newDate.getUTCFullYear();
        
        let date = document.createElement("div");
        date.classList.add("comment__content-header--date");
        date.innerText = todayString;
        headerContainer.appendChild(date);

        let textContainer = document.createElement("div");
        textContainer.classList.add("comment__text-container");
        contentContainer.appendChild(textContainer);

        let comment = document.createElement("p");
        comment.classList.add("comment__text-container--comment")
        comment.innerText = arr[i]["comment"];
        textContainer.appendChild(comment);

        let deleteButtonContainer = document.createElement("div");
        deleteButtonContainer.classList.add("comment__delete-button-container");
        contentContainer.appendChild(deleteButtonContainer);
    
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("comment__delete-button");
        deleteButton.addEventListener("click", event => {
        let commentId = event.target.id;
        deleteComment(commentId);
        });
        
        deleteButton.id = arr[i]["id"];
        deleteButton.innerText = "Remove";
        deleteButtonContainer.appendChild(deleteButton);
    }
}

// // DOM API -> to form in html

const form = document.querySelector('.comment__inputbox');

form.addEventListener("submit", event => {
    //prevents page
    event.preventDefault();

    let newComment = axios.post (
        `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`,
        {
            name: event.target.name.value,
            comment: event.target.comment.value
        }    
    );
    newComment.then(()=> {
        getComments();

    newComment.catch((error)=> {
        console.log(error);
    })
        
    });

    let clearComment = document.querySelector('.comment__inputbox');
    clearComment.reset();
});

// Error Function
function error(){
    if(event.target.name.value == " "|| event.target.name.comment == "" ){
        
    }

}

// Function to get comments from server
function getComments() {
    axios
        .get(
        `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`
        )
        .then(response => {
            displayComments(
            response.data.sort(function(a, b) {
            return b.timestamp - a.timestamp;
            })
            );
        });

    }

  //Get comments
    getComments();

  //Delete comments by ID
function deleteComment(id) {
    axios
        .delete(
        `https://project-1-api.herokuapp.com/comments/${id}?api_key=${apiKey}`
        )   
        .then(response => {
        getComments();
        });
    }
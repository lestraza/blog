const url = "https://jsonplaceholder.typicode.com/posts";

function getData() {
    fetch(url)
    .then(function(response) {
        return response.json();        
    })
    .then(resData => {
        resData.forEach(item => {
            const { id } = item;
            getPicture(id, function(photoUrl) {
                render(item, photoUrl);
            });
        })
    })    
}
getData();

function getPicture(id, callback) {
    const urlPhotos = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(urlPhotos)
    .then(function(response) {
        return response.json();
    })
    .then(resData => {
        callback(resData.thumbnailUrl);

    }) 
}
function render(item, photoUrl) {
    const wrapper = document.querySelector(".wrapper");
    const { title, body } = item;
    wrapper.innerHTML += `
            <div class="container__post">
            <div class="picture__post">
            <img src="${photoUrl}">
            </div>
            <p class="title__post">${title}</p>
            <p class="body__post">${body}</p>
            </div>
        `
}   
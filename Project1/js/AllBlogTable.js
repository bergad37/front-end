const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal-2');
const confirmDeleteBtn = document.querySelector('.confirm-delete');
const cancelDeleteBtn = document.querySelector('.cancel-delete');
const notification = document.getElementById("notify")

const blogTable = document.getElementById("elements");

fetch('https://tiny-puce-stingray-sock.cyclic.app/api/v1/blogs')
    .then((result) => {
        return result.json();
    })
    .then((result) => {

        result.data.forEach(result => {


            const row = document.createElement("section");
            row.classList.add("who");
            row.id = `result-${result._id}`;

            const postDate = document.createElement("h4");


            const image = document.createElement("div");
            image.classList.add("who-img");


            const imagesource = document.createElement("img");
            image.appendChild(imagesource);


            const body = document.createElement("div")
            body.classList.add("who", "text", "bg-darker", "p-2", "y-1");



            const title = document.createElement("h2");
            title.classList.add("py-1", "p-1", "text-primary");
            body.appendChild(title);


            const content = document.createElement("p");
            content.classList.add("light-text", "justify-text", "list", "p-1");
            body.appendChild(content);

            const author = document.createElement("p");
            author.classList.add("light-text", "justify-text", "list", "p-1");
            body.appendChild(author);

            const commentContainer = document.createElement('div')
            const commentBox = document.createElement("textarea");
            commentBox.classList.add("text-area");
            const commentBtn = document.createElement("button")
            commentBtn.textContent = 'Comment';
            commentContainer.appendChild(commentBox);
            commentContainer.appendChild(commentBtn);



            const action = document.createElement("div");
            action.classList.add("title");
            const deleteButton = document.createElement("div");
            deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>'
            deleteButton.classList.add("icons");
            action.append(deleteButton);


            const update = document.createElement("div");
            update.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>'
            update.classList.add('icons');
            action.appendChild(update);

            //set the values
            imagesource.src = result.imageUrl;
            postDate.textContent = result.postedAt;
            title.textContent = result.title;
            author.textContent = 'Author: ' + result.Author;
            content.textContent = result.message;
            // deleteButton.textContent = 'Delete post';
            // update.textContent = 'Update post';
            action.appendChild(deleteButton);
            action.appendChild(update);

            row.appendChild(image);
            row.appendChild(body);
            row.appendChild(commentContainer);
            row.appendChild(action);


            blogTable.appendChild(row);
            //Deleting a blog
            deleteButton.addEventListener("click", function() {
                if (!localStorage.getItem('authtoken')) {
                    alert("You need to log in first");
                    location.href = "/Project1/Pages/login.html"
                    return;
                }
                // show modal
                modal.style.display = 'block';

                // hide modal when cancel button is clicked
                cancelDeleteBtn.addEventListener('click', () => {
                    modal.style.display = 'none';
                });

                // perform deletion when confirm button is clicked
                confirmDeleteBtn.addEventListener('click', () => {
                    deleteBlog(result._id);
                    modal.style.display = 'none';
                    Location.reload();
                });

                // if (confirm("Are you sure you want to delete this blog?")) {
                //     location.reload();
                // }
            });
            //updating the blog
            update.addEventListener("click", function() {
                if (!localStorage.getItem('authtoken')) {
                    notification.textContent = "You need to log in first"
                    modal2.style.display = "block";
                    location.href = "/Project1/Pages/login.html"
                    return;
                }
                const IdToBeUpdated = localStorage.setItem("id", result._id);
                location.href = "/Project1/Pages/editBlog.html";
            })
        });
    })
    .catch((error) => {
        console.log(error)
    })

function deleteBlog(blogId) {
    const token = localStorage.getItem('authtoken'); //Get the token of loged user from the database
    fetch(`https://tiny-puce-stingray-sock.cyclic.app/api/v1/blogs/${blogId}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((result) => {
            return result.json();

        })
        .then((result) => {

            alarm.textContent = result.message;
            box.style.display = "block";
            if (result.ok) {
                const deletedRow = document.getElementById(`result-${blogId}`);
                deletedRow.parentNode.removeChild(deletedRow);
            }
        })
        .catch((error) => {

            // Create an error message to show the user
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Failed to delete blog";
            errorMessage.classList.add("error-message");
            // Append the error message to the page
            box.appendChild(errorMessage);
        });
}
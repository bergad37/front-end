const subContainer = document.getElementById("sub");
const blogs = document.getElementById("BLOGS");
const loader = document.getElementById("loader")
fetch('https://tiny-puce-stingray-sock.cyclic.app/api/v1/blogs')
    .then((result) => {
        return result.json();
    })
    .then((result) => {

        // Attaching to the blog slot on landing page
        const lastThreePosts = result.data.slice(-3);
        const allPost = result.data;

        lastThreePosts.forEach(post => {

            const row1 = document.createElement("div");
            row1.classList.add("box", "bg-light");


            const imagesource = document.createElement("img");
            imagesource.classList.add("pictures");
            imagesource.src = post.imageUrl;

            const titleElement = document.createElement("h3");
            // titleElement.textContent = post.title;
            titleElement.innerHTML = `<a href="/Project1/Pages/subpages/blogpanel.html">${post.title}</a>`



            const postAuthor = document.createElement("h5");
            postAuthor.classList.add("author");
            postAuthor.textContent = 'Written by' + post.Author;
            const contentElement = document.createElement("p");
            contentElement.classList.add("light-text", "py-1");
            const maxLength = 200; // Set the maximum length of the content in characters
            if (post.message.length > maxLength) {
                // If the length of the post message is greater than the maximum length, truncate the content and add a "read more" link
                const truncatedContent = post.message.substring(0, maxLength) + '...';
                contentElement.innerHTML = truncatedContent + '<a href="#" class="read-more">Read More</a>';
                const readMoreLink = contentElement.querySelector('.read-more');
                readMoreLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    contentElement.innerHTML = post.message + '<a href="#" class="read-less">Read Less</a>';
                    const readLessLink = contentElement.querySelector('.read-less');
                    readLessLink.addEventListener('click', (event) => {
                        event.preventDefault();
                        contentElement.innerHTML = truncatedContent + '<a href="#" class="read-more">Read More</a>';
                    });
                });
            } else {
                contentElement.textContent = post.message;
            }


            row1.appendChild(imagesource);
            row1.appendChild(titleElement);
            row1.appendChild(postAuthor);
            row1.appendChild(contentElement);
            blogs.appendChild(row1); // append the post element to the container
            loader.style.display = "none";
        });

    })
    .catch((error) => {
        alert(error)
    })
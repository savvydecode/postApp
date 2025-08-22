import { ApiKey } from "./keys.js";
import { postApiURL } from "./keys.js";

document.addEventListener('DOMContentLoaded', async (e) => {

    e.preventDefault();

    const postContainer = document.querySelector('.post-container');
    try {
        const response = await fetch(postApiURL, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${ApiKey}`
            }
        });
        //check for errors
        if (response.status !== 200) {
            throw new Error(`Error!: ${response.status}`)
        }

        const data = await response.json();
        console.log(data);
        console.log('data fetched successful')

        //display the posts
        data.map(displayPost);

        }catch (error) {
        console.error(error);
    }

    function displayPost(post) {

        //create a div assign class post-title
        const postTitle = document.createElement('div');
        postTitle.classList.add('post-title');
        postTitle.innerText = post.title;

        //create a div and assign class post-body 
        const postBody = document.createElement('div');
        postBody.classList.add('post-body')
        postBody.innerText = post.body;

        //create a div and assign the class post-card
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        // append both div to post Card
        postCard.appendChild(postTitle);
        postCard.appendChild(postBody);

        //append post card to postContainer
        postContainer.appendChild(postCard);
    }
})
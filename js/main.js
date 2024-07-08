document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        {
            title: "My First Blog Post",
            date: "July 7, 2024",
            content: "This is the content of my first blog post."
        },
        {
            title: "Another Post",
            date: "July 8, 2024",
            content: "Here's some more content."
        }
    ];

    const postsContainer = document.getElementById("posts");

    posts.forEach(post => {
        const postElement = document.createElement("article");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <small>${post.date}</small>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
});

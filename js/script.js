document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const searchResults = document.getElementById("search-results");

    function filterArticles() {
        const query = searchBar.value.toLowerCase();
        searchResults.innerHTML = "";

        if (query === "") {
            searchResults.style.display = "none";
            return;
        }

        const articles = [
            { title: "Article 1", link: "../pages/articles/article1.html" },
            { title: "Article 2", link: "../pages/articles/article2.html" },
            { title: "Article 3", link: "../pages/articles/article3.html" },
            { title: "Article 4", link: "../pages/articles/article4.html" },
            { title: "Article 5", link: "../pages/articles/article5.html" },
            { title: "Article 6", link: "../pages/articles/article6.html" }
        ];

        let results = articles.filter(article => article.title.toLowerCase().includes(query));

        if (results.length > 0) {
            searchResults.style.display = "block";
            results.forEach(article => {
                let resultItem = document.createElement("a");
                resultItem.href = article.link;
                resultItem.textContent = article.title;
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.style.display = "none";
        }
    }

    searchBar.addEventListener("keyup", filterArticles);
});

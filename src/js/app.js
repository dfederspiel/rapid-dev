import $ from 'jquery';

fetch('/api/articles?_expand=author').then(res => res.json()).then(articles => {
    $('#articles').html(articles.map(article => {
        return `
            <article>
                <h2>
                    <a href="/article-detail.html?article=${article.id}">
                        ${article.title}
                    </a>
                </h2>
                <footer>By: ${article.author?.firstName} ${article.author?.lastName}</footer>
            </article>
        `;
    }))
})
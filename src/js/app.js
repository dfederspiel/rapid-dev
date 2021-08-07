import $ from 'jquery';

fetch('/api/articles?_expand=author').then(res => res.json()).then(articles => {
    $('#articles').html(articles.map(article => {
        return `
            <article>
                <b>
                    <a href="/article-detail.html?article=${article.id}">
                        ${article.title}
                    </a>
                </b>
                <footer>By: ${article.author?.firstName} ${article.author?.lastName}</footer>
            </article>
        `;
    }))
})
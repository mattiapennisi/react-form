import articles from '../../data/articles.js'

export default function Main() {
    return (
        <main id="main">
            <ul>
            {
                articles.map(article => {
                    return <li>{article.title}</li>
                })
            }
            </ul>
            
        </main>
    )
}
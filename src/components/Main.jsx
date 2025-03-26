import { useState } from 'react'
import articles from '../../data/articles.js'

export default function Main() {

    const [articleTitleValue, setArticleTitleValue] = useState('')
    const [articlesList, setArticlesList] = useState(articles)

    const newArticle = {
        id: articlesList.length + 1,
        title: {articleTitleValue},
        body: '',
    }

    function handleSubmit(e) {
        e.preventDefault()

    articlesList = [...articlesList, newArticle]
    }

    return (
        <main id="main">
            <ul>
                <h2>Articles List</h2>
                {
                    articles.map(article => {
                        return <li>{article.title}</li>
                    })
                }
            </ul>

            <form id='articlesForm' action="" onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={articleTitleValue}
                    onChange={(e) => setArticleTitleValue(e.target.value)}
                />

                <button
                    type="submit"

                >
                    Submit
                </button>

            </form>

        </main>
    )
}
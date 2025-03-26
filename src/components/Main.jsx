import { useState } from 'react'
import articles from '../../data/articles.js'

export default function Main() {

    const [articlesList, setArticlesList] = useState(articles)
    const [articleTitleValue, setArticleTitleValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const newArticle = {
            id: articlesList.length + 1,
            title: articleTitleValue,
            body: '',
        }

        setArticlesList([...articlesList, newArticle])
        setArticleTitleValue('')
    }

    return (
        <main id="main">
            <ul>
                <h2>Articles List</h2>
                {
                    articlesList.map(article => {
                        return <li key={article.id}>
                            {article.title}
                            <div>
                                <div>
                                    <i class="fa-solid fa-pen"></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-trash"></i>
                                </div>
                            </div>

                        </li>
                    })
                }
            </ul>

            <form id='articlesForm' onSubmit={handleSubmit}>

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
import { useState } from 'react'
import articles from '../../data/articles.js'

export default function Main() {

    const [articlesList, setArticlesList] = useState(articles)
    const [articleTitleValue, setArticleTitleValue] = useState('')
    const [articleToEdit, setArticleToEdit] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()

        if (articleTitleValue.length > 0) {

            const newArticle = {
                id: articlesList.length + 1,
                title: articleTitleValue,
                body: '',
            }

            setArticlesList([...articlesList, newArticle])
            setArticleTitleValue('')
        }
    }

    function handleTitleEdit(articleId) {
        const articleToEdit = articlesList.find(article => article.id === articleId)
        setArticleToEdit(articleToEdit)
    }

    function handleArticleDelete(articleId) {
        const updatedArticlesList = articlesList.filter(article => article.id !== articleId)
        setArticlesList(updatedArticlesList)
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
                                <div onClick={() => handleTitleEdit(article.id)}>
                                    <i className="fa-solid fa-pen"></i>
                                </div>
                                <div onClick={() => handleArticleDelete(article.id)}>
                                    <i className="fa-solid fa-trash"></i>
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
                <div>{articleToEdit}</div>

            </form>

        </main>
    )
}
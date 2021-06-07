import ArticleHeader from './ArticleHeader'
import ArticleSectionEmail from './ArticleSectionEmail'
import ArticleSectionEmailActions from './ArticleSectionEmailActions'

function Article() {
    return (<article className="email-content">
    <div className="title">
      <h1>Welcome to Flaticon</h1>
    </div>
    <ArticleHeader />
    <ArticleSectionEmail />
    <ArticleSectionEmailActions />
  </article>)
}

export default Article
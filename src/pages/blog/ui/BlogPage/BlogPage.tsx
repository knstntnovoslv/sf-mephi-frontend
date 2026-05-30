import { articles } from '../../../../entities/article/model/mock'
import { ArticleCard } from '../../../../entities/article/ui/ArticleCard/ArticleCard'
import { Filters } from '../../../../features/filters'
import { useWindowWidth } from '../../../../shared/lib/useWindowWidth'
import { AppButton } from '../../../../shared/ui/Button'
import styles from './BlogPage.module.scss'
import Bg from '../../../../assets/bg1.png'

export const BlogPage = () => {
  const width = useWindowWidth()

  return (
    <>
      <div className={styles.root}>
        <h1>Блог</h1>
        <Filters/>
        <div className={styles.cards}>
          {articles.map(article => <ArticleCard {...article}/>)}
        </div>
        <AppButton variant="filled" className={styles.more}>
          Еще
        </AppButton>
   
      </div>
      {width > 1200 && 
        <img src={Bg} className="blog-bg"/>
      }
    </>

  )
}
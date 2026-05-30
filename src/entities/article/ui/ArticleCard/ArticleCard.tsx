import { useContext, type ComponentProps } from "react";
import { Tag } from "../../../../shared/ui/Tag/Tag";
import type { IArticle } from "../../model/types";
import styles from './ArticleCard.module.scss'
import cl from 'classnames'
import Unicorn from '../../../../assets/unicorn.svg'
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../shared/context/AppContext";


export const ArticleCard = (props: IArticle & ComponentProps<"div">) => {
  const {tags, img, alt, title, author, date, content, className, ...args} = props
  const navigate = useNavigate()

  const {setArticleTitle} = useContext(AppContext)

  return (
    <div 
      className={cl(styles.card, className)} 
      onClick={() => {
        navigate("/article")
        setArticleTitle(title)
      }}
      {...args}
    >
      <div className={styles.tagsContainer}>
        {Object.values(tags).map(tag => <Tag {...tag} icon={Unicorn}/>)}
      </div>
      <img src={img} alt={alt} className={styles.img}/>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={cl("small", styles.author)}>Автор: {author}</p>
        <p>{content}</p>
      </div>
      <p className={cl(styles.date, "small")}>{date}</p>
    </div>
  )
}
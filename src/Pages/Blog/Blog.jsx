import React from 'react';
import styles from './Blog.module.scss';
import HeadingUnderlined from '../../Components/HeadingUnderlined/HeadingUnderlined';
import Button from '../../Components/Button/Button';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';

const Blog = () => {
    return (
        <article>
            <HeadingUnderlined align='center'>Check out our latest article</HeadingUnderlined>
            <div className={styles.articles_grid}>
                <ArticleCard image_src='assets/article_thumbnail_1.svg' title='Disease detection, check up in the laboratory'>In this case, the role of the health laboratory is very important to do a disease detection...</ArticleCard>
                <ArticleCard image_src='assets/article_thumbnail_2.svg' title='Herbal medicines that are safe for consumption'>Herbal medicine is very widely used at this time because of its very good for your health...</ArticleCard>
                <ArticleCard image_src='assets/article_thumbnail_3.svg' title='Natural care for healthy facial skin'>A healthy lifestyle should start from now and also for your skin health. There are some...</ArticleCard>
            </div>
            <Button>View all</Button>
        </article>
    );
}

export default Blog;
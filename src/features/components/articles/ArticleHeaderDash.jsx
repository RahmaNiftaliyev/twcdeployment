// @ts-nocheck
import React from 'react';
import Navigation from '../../navigation/Navigation';
import ArticleHeader from './ArticleHeader';
import styles from './articles.module.css';
import blackThinkWiseLogo from './../common/assets/svg/navigation-black-logo.svg';

const ArticleHeaderDash = ({ headerText, isArticle }) => {
  return (
    <div>
      <Navigation
        logo={blackThinkWiseLogo}
        enable={false}
        textColor="text-dark"
        bgColor="bg-dark"
        isArticle={isArticle}
      />
      <ArticleHeader text={headerText} />
    </div>
  );
};

export default ArticleHeaderDash;

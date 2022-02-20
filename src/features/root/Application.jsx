import React, { Component } from 'react'
import {Helmet} from "react-helmet";


class Application extends Component {
  render() {
    return (
     <div className="application">
          


    {/*
        (optional) Useful when you want titles to inherit from a template: */}

        <Helmet
            titleTemplate="%s |TWC"
        >
            <title>Peşəkar biznes xidmətləri</title>
        </Helmet>

        outputs:

        <head>
            <title>Nested Title | MyAwesomeWebsite.com</title>
        </head>
   
    titleTemplate="MySite.com - %s"

    {/*
        (optional) used as a fallback when a template exists but a title is not defined

        <Helmet
            defaultTitle="My Site"
            titleTemplate="My Site - %s"
        />

        outputs:

        <head>
            <title>My Site</title>
        </head>
    */}
    defaultTitle="My Default Title"

    {/* (optional) callback that tracks DOM changes */}
    onChangeClientState={(newState, addedTags, removedTags) => console.log(newState, addedTags, removedTags)}
>
    {/* html attributes */}
    <html lang="en" amp />

    {/* body attributes */}
    <body className="root" />

    {/* title attributes and value */}
    <title itemProp="name" lang="en">My Plain Title or {`dynamic`} title</title>

    {/* base element */}
    <base target="_blank" href="http://mysite.com/" />

    {/* multiple meta elements */}
    <meta name="description" content="Helmet application" />
    <meta property="og:type" content="article" />

    {/* multiple link elements */}
    <link rel="canonical" href="http://mysite.com/example" />
    <link rel="apple-touch-icon" href="http://mysite.com/img/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="http://mysite.com/img/apple-touch-icon-72x72.png" />
    {locales.map((locale) => {
        <link rel="alternate" href="http://example.com/{locale}" hrefLang={locale} key={locale}/>
    })}

    {/* multiple script elements */}
    <script src="http://include.com/pathtojs.js" type="text/javascript" />

    {/* inline script elements */}
    <script type="application/ld+json">{`
        {
            "@context": "http://schema.org"
        }
    `}</script>
        </div>
    )
  }
}


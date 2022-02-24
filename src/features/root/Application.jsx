import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
class Application extends Component {
  render() {
    return (
      <div>
        <Helmet> 
          <meta name="description" content="Azərbaycanda ilk yerli saf menecment konsaltinq servisləri" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="keywords"
            content="consulting,management,management consulting,azure,baku,azerbaijan,business,chingiz novruzzade,Netflix bussiness model,startap,success"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="1 days" />
          <meta name="author" content="devs:Rahman Niftaliyev | Məhəmməd Sərkərli designer:Sabina Mammadova" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/navigation-white-logo.svg" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link rel="icon" href="%PUBLIC_URL%/navigation-white-logo.svg" />
          <title>TWC - Peşəkar biznes xidmətləri</title>
        </Helmet>
      </div>
    );
  }
}

export default Application;

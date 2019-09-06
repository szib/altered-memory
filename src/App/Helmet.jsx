import React from "react";

import Helmet from "react-helmet";

const DefaultHelmet = () => {
  return (
    <Helmet defaultTitle="Altered Memory" titleTemplate="Altered Memory :: %s">
      <link
        href="https://fonts.googleapis.com/css?family=Orbitron:400,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default DefaultHelmet;

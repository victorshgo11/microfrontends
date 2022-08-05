import React from "react";
import ReactDOM from "react-dom";

import { Container } from "dsl/Container";
import { Image } from "dsl/Image";
import { Title } from "dsl/Title";
import { Links } from "dsl/Links";
import { GlobalStyles } from "dsl/GlobalStyles";

const App = () => (
  <main>
    <GlobalStyles />
    <Container>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React.js"
      />
      <br />
      <br />
      <Title>
        Proof of concept for projects with <code>micro-frontends.</code>
        <br />
        Using&nbsp;
        <Links
          href="https://webpack.js.org/concepts/module-federation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Module Federation.
        </Links>
      </Title>
    </Container>
  </main>
);

ReactDOM.render(<App />, document.getElementById("app"));

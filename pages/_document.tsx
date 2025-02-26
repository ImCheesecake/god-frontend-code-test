import Document, { Html, Head, Main, NextScript } from "next/document";
import { links } from "@volvo-cars/css/links";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {links().map((link) => (
            <link key={link.rel + link.href} {...link} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'


// this file is added because the styled component was not working in next js because of server side rendering which means that the page renders before styled components so its effect was not visible. 
// https://github.com/vercel/next.js/blob/deprecated-main/examples/with-styled-components/pages/_document.js
// above link has this file
// got the solution on below link
// https://dev.to/rsanchezp/next-js-and-styled-components-style-loading-issue-3i68 

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
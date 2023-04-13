import { Html, Head, Main, NextScript } from 'next/document'
import ErrorBoundary from './error-boundary'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ErrorBoundary>
          <Main />
          <NextScript />
        </ErrorBoundary>
      </body>
    </Html>
  )
}

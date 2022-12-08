import '@/styles/globals.scss'
import { ToastContainer } from 'react-toastify'
import { appWithTranslation } from 'next-i18next'
import { GenPhraseProvider } from '@/contexts/genPhrase'
import { TypingProvider } from '@/contexts/typing'
import LayoutsNavbar from '@/components/navbar'

import appWithSession from '@/hoc/appWithSession'
import { CheckTypedProvider } from '@/contexts/checkTyped'

function MyApp({ Component, pageProps }) {
  return (
    <GenPhraseProvider>
      <TypingProvider>
        <CheckTypedProvider>
          <LayoutsNavbar />
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </CheckTypedProvider>
      </TypingProvider>
    </GenPhraseProvider>
  )
}

export default appWithSession(appWithTranslation(MyApp))

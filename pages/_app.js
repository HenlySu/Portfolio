import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'

import Layout from '@/src/components/Layout';

export default function App({ Component, pageProps }) {
   return (
      <>
         <div className='body'>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </div>
      </>
   )
}

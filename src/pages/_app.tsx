import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}

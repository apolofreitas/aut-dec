import 'bootstrap/dist/css/bootstrap.min.css';

import 'src/styles/global.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

import '../components/register-components';
import '../css/main.css';
import Head from 'next/head';
import 'stackbit-typist/dist/Typist.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

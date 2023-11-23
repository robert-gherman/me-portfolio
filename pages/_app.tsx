/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import { AppProps } from 'next/app';
import '../styles/global.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../shared/components/loader';
import CookieAlert from '../shared/components/cookie-alert';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    });
    const spring = {
        type: 'spring',
        damping: 20,
        stiffness: 100,
        when: 'afterChildren'
    };

    return (
        <div>
            <Head>
                <title>Robert Gherman | React Developer</title>
                <meta name="title" content="Robert Gherman | React Developer" />
                <link rel="icon" href="images/logos.png" />
                <meta
                    name="description"
                    content="Robert is a junior Frontend Developer with a strong foundation in HTML, CSS, and JavaScript"
                />
                <meta
                    name="keywords"
                    content="Robert is a junior Frontend Developer with a strong foundation in HTML, CSS, and JavaScript"
                />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="10 days" />
                <meta name="author" content="Robert Gherman" />

                <meta httpEquiv="content-language" content="en" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-2595CLJE11" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `       
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-2595CLJE11');`
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2472275,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
                    }}
                />
            </Head>
            {loading ? (
                <Loader />
            ) : (
                <AnimatePresence>
                    <div className="page-transition-wrapper overflow-x-hidden min-h-screen">
                        <motion.div
                            transition={spring}
                            key={router.pathname}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            id="page-transition-container"
                        >
                            <Component {...pageProps} key={router.pathname} />
                        </motion.div>
                    </div>
                    <CookieAlert />
                </AnimatePresence>
            )}
        </div>
    );
}

export default MyApp;

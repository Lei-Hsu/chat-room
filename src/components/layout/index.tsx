import React from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Footer from './Footer';

const Layout = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const FooterArea = () => {
    const hiddenFooterPage: string[] = ['/message-room/[id]', '/']; // 如果有要隱藏 footer 的頁面就把 router 加進來，例如：'/productList'
    const isHiddenFooter: boolean = hiddenFooterPage.includes(router.pathname);

    return isHiddenFooter ? <></> : <Footer />;
  };

  return (
    <div>
      <Component {...pageProps} />
      <FooterArea />
    </div>
  );
};

export default Layout;

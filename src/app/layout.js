'use client';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import StyledComponentsRegistry from '../../lib/registry';
import Footer from './components/footer/footer';
import Header from './components/Header/header';
import GlobalStyle from './globalsStyled';
import { ProductProvider } from '../context/Product';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>
          <AntdRegistry>
            <StyledComponentsRegistry>
              <GlobalStyle />
              <Header />
              <main>{children}</main>
              <Footer />
            </StyledComponentsRegistry>
          </AntdRegistry>
        </ProductProvider>
      </body>
    </html>
  );
}

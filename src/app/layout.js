'use client'
import StyledComponentsRegistry from "../../lib/registry";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import GlobalStyle from "./globalsStyled";
import Footer from "./components/footer";
import Header from "./components/Header/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <Header/>
            <main>{children}</main>
            <Footer/>
          </StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}

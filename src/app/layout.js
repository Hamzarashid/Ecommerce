import StyledComponentsRegistry from "../../lib/registry";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import GlobalStyle from "./globalsStyled";
import Header from "./components/header";
import Footer from "./components/footer";

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

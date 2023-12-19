type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <html>
    <body>{children}</body>
  </html>
);

export default Layout;

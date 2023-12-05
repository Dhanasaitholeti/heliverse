interface LayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default RootLayout;

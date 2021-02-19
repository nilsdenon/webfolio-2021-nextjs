import Header from "./Header"

const Layout = ({ data, children }) => {
  return (
    <div>
      <Header header={data?.header} menu={data?.menus?.headerMenu} />
      {children}
    </div>
  )
}

export default Layout

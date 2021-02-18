import Header from "./Header"

const Layout = ({ data, children }) => {
  return (
    <div>
      <Header menu={data?.menus?.headerMenu} />
      {children}
    </div>
  )
}

export default Layout

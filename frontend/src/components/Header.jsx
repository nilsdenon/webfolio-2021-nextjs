import Nav from "./Nav"
import { isEmpty } from "lodash"

const Header = ({ menu, header }) => {
  if (isEmpty(menu)) {
    return null
  }
  return (
    <header>
      {header && <p dangerouslySetInnerHTML={{ __html: header.siteTitle }} />}

      <Nav menu={menu} />
    </header>
  )
}

export default Header

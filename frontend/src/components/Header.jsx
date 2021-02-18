import Nav from "./Nav"
import { isEmpty } from "lodash"

const Header = ({ menu }) => {
  if (isEmpty(menu)) {
    return null
  }
  return (
    <header>
      <Nav menu={menu} />
    </header>
  )
}

export default Header

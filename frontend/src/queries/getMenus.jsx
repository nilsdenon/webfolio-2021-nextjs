import { gql } from "@apollo/client"
import MenuFragment from "./MenuFragment"

export const GET_MENUS = gql`
  query GET_MENUS {
    headerMenu: menuItems(
      where: { location: HCMS_MENU_HEADER, parentId: "0" }
    ) {
      edges {
        node {
          ...MenuFragment
        }
      }
    }
    footerMenu: menuItems(
      where: { location: HCMS_MENU_FOOTER, parentId: "0" }
    ) {
      edges {
        node {
          ...MenuFragment
        }
      }
    }
  }
  ${MenuFragment}
`

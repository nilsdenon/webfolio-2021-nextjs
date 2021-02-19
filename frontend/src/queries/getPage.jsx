import { gql } from "@apollo/client"
import MenuFragment from "./MenuFragment"

export const GET_PAGE = gql`
  query GET_PAGE($uri: String) {
    page: pageBy(uri: $uri) {
      id
      title
      content
      slug
      uri
      seo {
        ...SeoFragment
      }
    }
  }
  ${MenuFragment}
`

export const GET_PAGE_BY_ID = gql`
  query GET_PAGE_BY_ID($id: ID!) {
    page(idType: DATABASE_ID, id: $id) {
      id
      title
      content
      slug
      uri
      seo {
        ...SeoFragment
      }
      status
    }
  }
  ${MenuFragment}
`

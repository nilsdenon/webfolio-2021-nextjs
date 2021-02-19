import { gql } from "@apollo/client"

export const GET_PAGES = gql`
  query GET_PAGES {
    pages: pages {
      nodes {
        id
        uri
      }
    }
  }
`

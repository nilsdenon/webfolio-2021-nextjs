import { gql } from "@apollo/client"

export const GET_SITE_METADATA = gql`
  query GET_SITE_METADATA {
    header: getHeader {
      favicon
      siteLogoUrl
      siteTagLine
      siteTitle
    }
  }
`

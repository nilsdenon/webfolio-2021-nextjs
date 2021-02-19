import client from "../src/apollo/client"
import { isEmpty } from "lodash"
import { GET_PAGES } from "../src/queries/getPages"
import { GET_PAGE } from "../src/queries/getPage"
import { useRouter } from "next/router"
import { handleRedirectsAndReturnData } from "../src/utils/slug"

const Pages = ({ data }) => {
  console.log(data)
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return <p>Pages</p>
}

export default Pages

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: params?.slug.join("/"),
    },
  })

  const defaultProps = {
    props: {
      data: data || {},
    },
    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  }

  return handleRedirectsAndReturnData(defaultProps, data, errors, "page")
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PAGES,
  })

  const pathsData = []

  data?.pages?.nodes &&
    data?.pages?.nodes.map((page) => {
      if (!isEmpty(page?.uri)) {
        const slugs = page?.uri?.split("/").filter((pageSlug) => pageSlug)
        pathsData.push({ params: { slug: slugs } })
      }
    })
  return {
    paths: pathsData,
    fallback: true,
  }
}

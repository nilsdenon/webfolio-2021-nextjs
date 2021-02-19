import client from "../src/apollo/client"
import { GET_MENUS } from "../src/queries/getMenus"
import Layout from "../src/components/Layout"

export default function Home({ data }) {
  return (
    <Layout data={data}>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Back End Developer
      </h2>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_MENUS,
  })

  return {
    props: {
      data: {
        header: data?.header,
        menus: {
          headerMenu: data?.headerMenu?.edges,
          footerMenu: data?.footerMenu?.edges,
        },
      },
    },
  }
}

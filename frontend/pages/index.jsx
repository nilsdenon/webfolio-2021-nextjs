import client from "../src/apollo/client"
import { GET_MENUS } from "../src/queries/getMenus"
import Link from "next/link"
import Layout from "../src/components/Layout"

const MenuItem = ({ href, label }) => {
  return (
    <li>
      <Link href={href}>
        <a>{label}</a>
      </Link>
    </li>
  )
}

export default function Home({ data }) {
  //console.warn("menus", menus)
  const headerMenu = data?.headerMenu

  console.log(headerMenu)

  return (
    <Layout data={data}>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Back End Developer
      </h2>

      {data?.headerMenu && (
        <nav>
          {
            <ul>
              {headerMenu.map((item, i) => (
                <MenuItem
                  key={i}
                  href={item.node.path}
                  label={item.node.label}
                />
              ))}
            </ul>
          }
        </nav>
      )}

      <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <svg
            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
          Full-time
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS,
  })

  //console.warn("data", data)

  return {
    props: {
      data: {
        menus: {
          headerMenu: data?.headerMenu?.edges,
          footerMenu: data?.footerMenu?.edges,
        },
      },
    },
  }
}

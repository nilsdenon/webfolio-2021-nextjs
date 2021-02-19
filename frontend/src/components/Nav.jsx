import { isEmpty } from "lodash"
import Link from "next/link"

const MenuItem = ({ href, label }) => {
  return (
    <Link href={href}>
      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        {label}
      </a>
    </Link>
  )
}

const Nav = ({ menu }) => {
  if (isEmpty(menu)) {
    return null
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {menu?.length
                  ? menu?.map((item) => (
                      <MenuItem
                        key={item?.node.id}
                        href={item?.node.path}
                        label={item?.node.label}
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

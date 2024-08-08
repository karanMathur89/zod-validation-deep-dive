"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type TLink = {
  name: string
  href: string
}

const primitivesLinks: TLink[] = [
  { name: "Strings", href: "/" },
  { name: "Numbers", href: "/numbers" },
]
const enumsLinks: TLink[] = [{ name: "Enums", href: "/enums" }]

const otherLinks: TLink[] = [
  {
    name: "Literals",
    href: "/literals",
  },
  {
    name: "Optionals",
    href: "/optionals",
  },
]

export default function SideNav() {
  const pathname = usePathname()
  return (
    <nav className="space-y-8 border-r border-gray-300 bg-gray-300/40 px-4 pt-8 sm:px-8">
      <LinkGroup
        title="Primitives"
        links={primitivesLinks}
        pathname={pathname}
      />
      <LinkGroup
        title="Enums"
        links={enumsLinks}
        pathname={pathname}
      />
      <LinkGroup
        title="Others"
        links={otherLinks}
        pathname={pathname}
      />
    </nav>
  )
}

function LinkGroup({
  title,
  links,
  pathname,
}: {
  title: string
  links: TLink[]
  pathname: string
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium leading-none">{title}</h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn([
                ["text-gray-500"],
                {
                  "text-gray-950": pathname === link.href,
                },
              ])}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

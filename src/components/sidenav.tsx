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
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function SideNav() {
  const pathname = usePathname()
  return (
    <nav className="space-y-8 bg-gray-300/80 px-4 pt-8 sm:px-8">
      <LinkGroup
        title="Primitives"
        links={primitivesLinks}
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
      <h2 className="text-xl font-semibold leading-none">{title}</h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={cn([
                ["font-medium text-gray-600"],
                {
                  "text-gray-900": pathname === link.href,
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

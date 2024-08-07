import { ReactNode } from "react"

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-center text-3xl font-bold leading-none tracking-tight">
      {children}
    </h1>
  )
}

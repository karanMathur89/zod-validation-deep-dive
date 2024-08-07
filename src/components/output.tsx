import { Code } from "bright"

export default function Output({ children }: { children: object }) {
  return (
    <Code
      lang="json"
      theme="one-dark-pro"
      // lineNumbers
    >
      {JSON.stringify(children, null, 2)}
    </Code>
  )
}

import Heading from "@/components/heading"
import Output from "@/components/output"

//* TYPE

type ZodProps = {
  title: string
  testData: any
  schema: any
}

export default function ZodSection({ title, testData, schema }: ZodProps) {
  return (
    <main className="space-y-4">
      <Heading>{title}</Heading>
      <pre className="w-fit rounded bg-gray-300 p-4 font-normal shadow-inner">
        {JSON.stringify(testData, null, 2)}
      </pre>
      <Output>{schema.safeParse(testData)}</Output>
    </main>
  )
}

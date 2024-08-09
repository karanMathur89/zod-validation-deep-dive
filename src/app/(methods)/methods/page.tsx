import { z } from "zod"
import Output from "@/components/output"
import Heading from "@/components/heading"

//* REFINE SCHEMA
const RefineSchema = z
  .object({
    title: z.string().min(4),
    author: z.string().min(4),
    publishedAt: z.string().date(),
  })
  .refine((data) => data.title.toLowerCase().match(/^[a-d]/), {
    message: "Title must start with any letter from a to d",
  })
const refineData = {
  author: "Michael Connelly",
  title: "The Black Echo",
  publishedAt: "1992-10-10",
}

//* TRANSFORM SCHEMA
const TransformSchema = z
  .object({
    title: z.string().min(4),
    author: z.string().min(4),
    publishedAt: z.string().date(),
  })
  .transform((data) => ({
    ...data,
    title: data.title.toLowerCase().split(" ").join("-"),
  }))
const transformData = {
  author: "Herman Wouk",
  title: "The Winds of War",
  publishedAt: "1971-10-10",
}

//* DEFAULT SCHEMA
const DefaultSchema = z.object({
  name: z.string().min(4),
  department: z.string().min(4).default("Electronics"),
  weight: z.number().min(1).max(1000),
  cost: z.number().min(1).max(100),
})
const defaultData = {
  name: "Apple",
  weight: 100,
  cost: 10,
}

export default function MethodsPage() {
  return (
    <main className="space-y-20">
      <Heading>Methods</Heading>
      <MethodSection
        title="refine"
        schema={RefineSchema}
        testData={refineData}
      />
      <MethodSection
        title="transform"
        schema={TransformSchema}
        testData={transformData}
      />
      <MethodSection
        title="default"
        schema={DefaultSchema}
        testData={defaultData}
      />
    </main>
  )
}

function MethodSection({
  title,
  schema,
  testData,
}: {
  title: string
  schema: any
  testData: any
}) {
  return (
    <section>
      <h2 className="mb-4 w-fit border-l-4 border-sky-700 p-2 font-mono text-2xl font-semibold leading-none text-sky-700">
        .{title}()
      </h2>
      <pre className="w-fit rounded bg-gray-300 p-4 font-normal shadow-inner">
        {JSON.stringify(testData, null, 2)}
      </pre>
      <Output>{schema.safeParse(testData)}</Output>
    </section>
  )
}

import { z } from "zod"
import ZodSection from "@/components/zod-section"

//* SCHEMAS
const OptionalSchema = z.object({
  name: z.string().min(3),
  age: z.number().min(18),
  gender: z.enum(["male", "female", "other"]).optional(),
})

const testData = {
  name: "Joe",
  age: 21,
  // gender: "male",
}

export default function OptionalsPage() {
  return (
    <ZodSection
      title="Optionals"
      schema={OptionalSchema}
      testData={testData}
    />
  )
}

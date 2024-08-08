import { z } from "zod"
import ZodSection from "@/components/zod-section"

//* SCHEMAS
const NumberSchema = z
  .number()
  .int()
  .gt(18)
  .lt(80)
  .multipleOf(5, { message: "dds" })

const testData = 20

export default function NumbersPage() {
  return (
    <ZodSection
      title="Numbers"
      schema={NumberSchema}
      testData={testData}
    />
  )
}

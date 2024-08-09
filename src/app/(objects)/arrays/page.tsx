import { z } from "zod"
import ZodSection from "@/components/zod-section"

//* SCHEMAS
const ArraySchema = z
  .array(z.union([z.string(), z.number()]))
  .nonempty()
  .min(3, { message: "Atleast 3 items" })

//* TEST DATA
const testData = ["chair", "table", "lamp"]

export default function ArraysPage() {
  return (
    <ZodSection
      title="Arrays"
      schema={ArraySchema}
      testData={testData}
    />
  )
}

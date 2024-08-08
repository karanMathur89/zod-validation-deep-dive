import { z } from "zod"
import ZodSection from "@/components/zod-section"

//* SCHEMAS
const LiteralSchema = z.literal("same")

const testData = "same"

export default function LiteralsPage() {
  return (
    <ZodSection
      title="Literals"
      schema={LiteralSchema}
      testData={testData}
    />
  )
}

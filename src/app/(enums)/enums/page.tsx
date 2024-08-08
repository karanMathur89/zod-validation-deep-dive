import { z } from "zod"
import ZodSection from "@/components/zod-section"

const fishes = ["salmon", "tuna", "trout"] as const

//* SCHEMAS
const FishEnum = z
  .enum(fishes)
  .refine((val) => val.startsWith("s"), { message: "Must start with s" })

const testData = "salmon"

export default function EnumsPage() {
  return (
    <ZodSection
      title="Enums"
      schema={FishEnum}
      testData={testData}
    />
  )
}

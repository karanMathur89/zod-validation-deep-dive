import { z } from "zod"
import ZodSection from "@/components/zod-section"

const fishes = ["salmon", "tuna", "trout"] as const

//* SCHEMAS
const FishEnum = z.enum(fishes)

const testData = "salmon"

const options = FishEnum.Values

console.log({ options })

export default function EnumsPage() {
  return (
    <ZodSection
      title="Enums"
      schema={FishEnum}
      testData={testData}
    />
  )
}

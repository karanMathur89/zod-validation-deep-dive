import { z } from "zod"
import ZodSection from "@/components/zod-section"

//* SCHEMAS
// const StringSchema = z
//   .string()
//   .trim()
//   .includes("bc")
//   .startsWith("a")
//   .endsWith("d")
//   .min(8)

const StringSchema = z
  .string()
  .email({ message: "HAS to be an email!!" })
  .startsWith("test")
  .refine((value) =>
    // value.endsWith(".com") || value.endsWith(".in") || value.endsWith(".uk"),
    value.match(/.com|.in|.uk$/i),
  )

//* TEST DATA
const testData = "test-email@example.iN"

export default function Home() {
  return (
    <ZodSection
      title="Strings"
      schema={StringSchema}
      testData={testData}
    />
  )
}

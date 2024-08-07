import { z } from "zod"
import Heading from "@/components/heading"
import Output from "@/components/output"

//* SCHEMAS
// const stringSchema = z
//   .string()
//   .trim()
//   .includes("bc")
//   .startsWith("a")
//   .endsWith("d")
//   .min(8)

const StringSchema = z
  .string()
  .email()
  .refine((value) =>
    // value.endsWith(".com") || value.endsWith(".in") || value.endsWith(".uk"),
    value.match(/.com|.in|.uk$/i),
  )

//* TYPE
type TString = z.infer<typeof StringSchema>

const testData = "test-email@example.iN"
const parsedData = StringSchema.safeParse(testData)

export default function Home() {
  return (
    <main>
      <Heading>Strings</Heading>

      <Output>{parsedData}</Output>
    </main>
  )
}

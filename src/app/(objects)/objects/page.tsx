import { z } from "zod"
import ZodSection from "@/components/zod-section"

//* SCHEMAS
const ObjectSchema = z.object({
  name: z.string().min(3, { message: "Atleast 3 characters long!!" }),
  age: z.number().min(18),
  gender: z.enum(["male", "female", "other"]).optional(),
})

//? shape
const NameSchema = ObjectSchema.shape.name
const parsedName = NameSchema.safeParse("Andy")
// console.log({ parsedName })

//? extend
const ExtendedObjectSchema = ObjectSchema.extend({
  email: z.string().email(),
})

//? partial
const PartialObjectSchema = ObjectSchema.partial()
// console.log(PartialObjectSchema.safeParse({ country: "India" }))

//? pick/omit
const PickedAgeAndGenderSchema = ObjectSchema.pick({ name: true, gender: true })
type PickedAgeAndGender = z.infer<typeof PickedAgeAndGenderSchema>

//? passthrough
const PassthroughObjectSchema = ObjectSchema.passthrough()
// console.log(
//   PassthroughObjectSchema.safeParse({
//     name: "Joe",
//     age: 21,
//     gender: "male",
//     region: "Asia/Kolkata", // extra key
//   }),
// )

//* TEST DATA
const testData = {
  name: "Joe",
  age: 21,
  // gender: "male",
}

export default function OBjectsPage() {
  return (
    <ZodSection
      title="Objects"
      schema={ObjectSchema}
      testData={testData}
    />
  )
}

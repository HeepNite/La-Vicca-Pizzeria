import Link from "next/link"
import { Button, Input, DatePickerDemo, SelectScrollable } from "@/components"


export const Style = () => {
  return (
    <section className="bg-white flex flex-col items-center justify-center xl:container">
      <article className="flex flex-col justify-center gap-3 px-7 py-20 xl:p-20">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry standard dummy text ever since the 1500s
        </p>
      </article>

      <article className="bg-black/90 w-full h-fit">
        <div className="flex flex-col justify-center gap-5 px-7 py-20 xl:p-20">
          <Link className="text-white text-xl hover:text-orange-300 transition-all duration-300 cursor-pointer" href='/'> link </Link>

          <Button variant='default' size='xl'>button xl</Button>
          <Button variant='orange' size='lg'>button lg</Button>
          <Button variant='input'>button default</Button>
          <Button variant='default' size='sm'>button sm</Button>

          <label className="text-white text-sm uppercase font-normal block mb-2" htmlFor="">first name</label>
          <Input type="text" id="firstname" />

          <label className="text-white text-sm uppercase font-normal block mb-2" htmlFor="">last name</label>
          <Input type="text" id="lastname" />

          <label className="text-white text-sm uppercase font-normal block mb-2" htmlFor="">email</label>
          <Input type="text" id="email" placeholder="hola" />
          <SelectScrollable />
          <DatePickerDemo />
        </div>
      </article>
    </section>
  )
}

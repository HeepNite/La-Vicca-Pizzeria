import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components"

export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="ESCOGE UN HORARIO" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="grid grid-cols-3 items-center justify-center">
          <SelectLabel className="col-span-3">=========== LUNES ===========</SelectLabel>
          <SelectItem value="lunes-10-am">10:00</SelectItem>
          <SelectItem value="lunes-11-am">11:00</SelectItem>
          <SelectItem value="lunes-12-am">12:00</SelectItem>
          <SelectItem value="lunes-13-pm">13:00</SelectItem>
          <SelectItem value="lunes-14-pm">14:00</SelectItem>
          <SelectItem value="lunes-15-pm">15:00</SelectItem>
          <SelectItem value="lunes-16-pm">16:00</SelectItem>
          <SelectItem value="lunes-17-pm">17:00</SelectItem>
          <SelectItem value="lunes-18-pm">18:00</SelectItem>
        </SelectGroup>

        <SelectGroup className="grid grid-cols-3 items-center justify-center">
          <SelectLabel className="col-span-3">=========== MARTES ===========</SelectLabel>
          <SelectItem value="martes-10-am">10:00</SelectItem>
          <SelectItem value="martes-11-am">11:00</SelectItem>
          <SelectItem value="martes-12-am">12:00</SelectItem>
          <SelectItem value="martes-13-pm">13:00</SelectItem>
          <SelectItem value="martes-14-pm">14:00</SelectItem>
          <SelectItem value="martes-15-pm">15:00</SelectItem>
          <SelectItem value="martes-16-pm">16:00</SelectItem>
          <SelectItem value="martes-17-pm">17:00</SelectItem>
          <SelectItem value="martes-18-pm">18:00</SelectItem>
        </SelectGroup>

        <SelectGroup className="grid grid-cols-3 items-center justify-center">
          <SelectLabel className="col-span-3">========== MIERCOLES ==========</SelectLabel>
          <SelectItem value="miercoles-10-am">10:00</SelectItem>
          <SelectItem value="miercoles-11-am">11:00</SelectItem>
          <SelectItem value="miercoles-12-am">12:00</SelectItem>
          <SelectItem value="miercoles-13-pm">13:00</SelectItem>
          <SelectItem value="miercoles-14-pm">14:00</SelectItem>
          <SelectItem value="miercoles-15-pm">15:00</SelectItem>
          <SelectItem value="miercoles-16-pm">16:00</SelectItem>
          <SelectItem value="miercoles-17-pm">17:00</SelectItem>
          <SelectItem value="miercoles-18-pm">18:00</SelectItem>
        </SelectGroup>

        <SelectGroup className="grid grid-cols-3 items-center justify-center">
          <SelectLabel className="col-span-3">=========== JUEVES ===========</SelectLabel>
          <SelectItem value="jueves-10-am">10:00</SelectItem>
          <SelectItem value="jueves-11-am">11:00</SelectItem>
          <SelectItem value="jueves-12-am">12:00</SelectItem>
          <SelectItem value="jueves-13-pm">13:00</SelectItem>
          <SelectItem value="jueves-14-pm">14:00</SelectItem>
          <SelectItem value="jueves-15-pm">15:00</SelectItem>
          <SelectItem value="jueves-16-pm">16:00</SelectItem>
          <SelectItem value="jueves-17-pm">17:00</SelectItem>
          <SelectItem value="jueves-18-pm">18:00</SelectItem>
        </SelectGroup>

        <SelectGroup className="grid grid-cols-3 items-center justify-center">
          <SelectLabel className="col-span-3">=========== VIERNES ===========</SelectLabel>
          <SelectItem value="viernes-10-am">10:00</SelectItem>
          <SelectItem value="viernes-11-am">11:00</SelectItem>
          <SelectItem value="viernes-12-am">12:00</SelectItem>
          <SelectItem value="viernes-13-pm">13:00</SelectItem>
          <SelectItem value="viernes-14-pm">14:00</SelectItem>
          <SelectItem value="viernes-15-pm">15:00</SelectItem>
          <SelectItem value="viernes-16-pm">16:00</SelectItem>
          <SelectItem value="viernes-17-pm">17:00</SelectItem>
          <SelectItem value="viernes-18-pm">18:00</SelectItem>
        </SelectGroup>

        <SelectGroup className="grid grid-cols-3 items-center justify-center">
          <SelectLabel className="col-span-3">=========== SABADO ===========</SelectLabel>
          <SelectItem value="sabado-10-am">10:00</SelectItem>
          <SelectItem value="sabado-11-am">11:00</SelectItem>
          <SelectItem value="sabado-12-am">12:00</SelectItem>
          <SelectItem value="sabado-13-pm">13:00</SelectItem>
          <SelectItem value="sabado-14-pm">14:00</SelectItem>
          <SelectItem value="sabado-15-pm">15:00</SelectItem>
          <SelectItem value="sabado-16-pm">16:00</SelectItem>
          <SelectItem value="sabado-17-pm">17:00</SelectItem>
          <SelectItem value="sabado-18-pm">18:00</SelectItem>
        </SelectGroup>

        <SelectGroup className="grid grid-cols-3 items-center justify-center">
          <SelectLabel className="col-span-3">=========== DOMINGO ===========</SelectLabel>
          <SelectItem value="domingo-10-am">10:00</SelectItem>
          <SelectItem value="domingo-11-am">11:00</SelectItem>
          <SelectItem value="domingo-12-am">12:00</SelectItem>
          <SelectItem value="domingo-13-pm">13:00</SelectItem>
          <SelectItem value="domingo-14-pm">14:00</SelectItem>
          <SelectItem value="domingo-15-pm">15:00</SelectItem>
          <SelectItem value="domingo-16-pm">16:00</SelectItem>
          <SelectItem value="domingo-17-pm">17:00</SelectItem>
          <SelectItem value="domingo-18-pm">18:00</SelectItem>
        </SelectGroup>

      </SelectContent>
    </Select>
  )
}

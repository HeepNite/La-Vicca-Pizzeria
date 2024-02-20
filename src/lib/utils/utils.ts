import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { LinksMenu } from "@/lib";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



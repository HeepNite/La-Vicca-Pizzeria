export interface MenuItemType {
    img: string
    name: string
    price: number
    desc: string
    review?: string
    stars?: number
    souldOut: boolean
    promoDisc?: number
}

export type MenuItem = MenuItemType[]
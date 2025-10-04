import { MenuItem } from "@/components/Header/Navbar/MenuItem/MenuItem";
import { MenuKey } from "@/data/menuItems";

// data/menuItems.ts
export interface MenuItem {
    id: number;
    title?: string;
    href: string;
    hasDropdown?: boolean;
    key: MenuKey
}

    
// types for shared btn
export interface btn {
    text: string
    className?: string
    handler?: ()=> void
}

//GlobalHeading
export interface GlobalHeadingType {
    title: string
    description: string 
    handler?: () => void 
    btntext: string 
    className?: string
}
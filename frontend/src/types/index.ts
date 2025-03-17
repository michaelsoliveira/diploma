/* eslint-disable  @typescript-eslint/no-explicit-any */
import { SVGProps } from "react";

export type SubMenuType = {
    name?: string,
    description?: string,
    href?: string,
    subMenuItems?: SubMenuType[],
    icon?: (props: SVGProps<SVGSVGElement>) => any
    faIcon?: boolean;
}
export type NavigationType = {
    name: string,
    href: string,
    current: boolean,
    visible: boolean,
    subMenu: boolean,
    subMenuItems?: SubMenuType[]
}
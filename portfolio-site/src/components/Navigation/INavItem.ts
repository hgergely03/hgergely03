import type { SvgComponent } from "astro/types";

export interface INavItem {
    label: string;
    icon: ImageMetadata;
    route: string;
}
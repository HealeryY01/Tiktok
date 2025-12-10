export interface MenuItem {
  id: number;
  title: string;
  link: string;
  hasDropdown: boolean;
  submenus?: Submenu[];
}

export interface Submenu {
  title: string;
  link: string;
  submenus?: Submenu[];
}
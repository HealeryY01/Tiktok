import { MenuItem } from "@/types/menu-d-t";

const headerMenuData:MenuItem[] = [
  {
    id: 1,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Trang chủ",
    pluseIncon: true,
    link: "#",
  },
  {
    id: 2,
    active: true,
    children: true,
    title: "Về chúng tôi",
    pluseIncon: true,
    link: "#",
    smallMenu: true,
  },
  {
    id: 3,
    hasDropdown: true,
    active: true,
    children: true,
    title: "Tài liệu ",
    pluseIncon: true,
    mediumMenu: true,
    link: "#",
  },
  {
    id: 4,
    hasDropdown: true,
    active: true,
    megaMenu: false,
    children: true,
    title: "Blog",
    pluseIncon: true,
    link: "#",
  },
  {
    id: 5,
    hasDropdown: true,
    active: true,
    megaMenu: false,
    children: true,
    title: "Shop",
    pluseIncon: true,
    link: "/shop-modern-light",
    submenus: [
      {
        title: "Shop Modern",
        link: "/shop-modern",
        pluseIncon: false
      },
      {
        title: "Shop With Slider",
        link: "/shop-with-slider-light",
        pluseIncon: false
      },
      {
        title: "Shop Page",
        link: "#",
        pluseIncon: true,
        submenus: [
          { title: "Shop Page", link: "/shop" },
          { title: "Shop Details", link: "/shop-details" },
        ]
      },
      {
        title: "My Account",
        link: "#",
        pluseIncon: true,
        submenus: [
          { title: "My Account", link: "/my-account" },
          { title: "Cart", link: "/cart" },
          { title: "Checkout", link: "/checkout" },
          { title: "Wishlist", link: "/wishlist" },
          { title: "LogIn", link: "/login" },
          { title: "Register", link: "/register" }
        ]
      }
    ]
  },
  {
    id: 6,
    hasDropdown: true,
    active: true,
    megaMenu: false,
    children: true,
    title: "Contact",
    pluseIncon: true,
    link: "/contact",
    submenus: [
      {
        title: "Contact Me",
        link: "/contact-me-light",
        pluseIncon: false
      },
      {
        title: "Contact Us",
        link: "/contact-us-light",
        pluseIncon: false
      },
      {
        title: "Get In Touch",
        link: "/contact",
        pluseIncon: false
      },
    ]
  }
];
export default headerMenuData;


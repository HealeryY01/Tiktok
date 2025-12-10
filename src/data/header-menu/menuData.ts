import { MenuItem } from "@/types/menu-d-t";

const headerMenuData: MenuItem[] = [
  {
    id: 1,
    title: "Trang chủ",
    link: "/",
    hasDropdown: false,
    submenus: []
  },
  {
    id: 2,
    title: "Về chúng tôi",
    link: "/about-us",
    hasDropdown: false,
    submenus: []
  },
  {
    id: 3,
    title: "Tài liệu",
    link: "https://tailieu.tikcrm.net/",
   hasDropdown: false,
    submenus: []
    
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog",
    hasDropdown: true,
    submenus: [
      {
        title: "Bài viết mới nhất",
        link: "/blog/latest",
      },
      {
        title: "Danh mục",
        link: "/blog/categories",
      },
      {
        title: "Tags",
        link: "/blog/tags",
      }
    ]
  },
  {
    id: 5,
    title: "Shop",
    link: "/shop",
    hasDropdown: true,
    submenus: [
      {
        title: "Sản phẩm mới",
        link: "/shop/new",
      },
      {
        title: "Sản phẩm bán chạy",
        link: "/shop/best-sellers",
      },
      {
        title: "Khuyến mãi",
        link: "/shop/promotions",
      },
      {
        title: "Tài khoản",
        link: "#",
        submenus: [
          { title: "Tài khoản của tôi", link: "/my-account" },
          { title: "Giỏ hàng", link: "/cart" },
          { title: "Thanh toán", link: "/checkout" },
          { title: "Yêu thích", link: "/wishlist" },
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Liên hệ",
    link: "/contact",
    hasDropdown: false,
    submenus: []
  }
];

export default headerMenuData;
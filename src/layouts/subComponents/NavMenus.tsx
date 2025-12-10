"use client";
import headerMenuData from "@/data/header-menu/menuData";
import { MenuItem, Submenu } from "@/types/menu-d-t";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavMenus() {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const [expandedMainMenus, setExpandedMainMenus] = useState<number[]>([]);
  const [expandedSubMenus, setExpandedSubMenus] = useState<string[]>([]);
  const pathname = usePathname();

  // Toggle main menu
  const toggleMainMenu = (menuId: number) => {
    setExpandedMainMenus((prev) =>
      prev.includes(menuId)
        ? prev.filter((id) => id !== menuId)
        : [...prev, menuId]
    );
  };

  // Toggle submenu
  const toggleSubMenu = (menuKey: string) => {
    setExpandedSubMenus((prev) =>
      prev.includes(menuKey)
        ? prev.filter((key) => key !== menuKey)
        : [...prev, menuKey]
    );
  };

  // Hàm kiểm tra xem menu có active không - FIXED VERSION
  const isMenuActive = (menuLink: string, submenus?: Submenu[]): boolean => {
    // Kiểm tra chính xác pathname với menuLink
    if (pathname === menuLink || pathname === `${menuLink}/`) {
      return true;
    }

    // Kiểm tra cho trang chủ
    if (menuLink === "/" && (pathname === "/" || pathname === "")) {
      return true;
    }

    // Kiểm tra các submenus
    if (submenus) {
      return submenus.some((submenu) => {
        // Kiểm tra submenu chính
        if (pathname === submenu.link || pathname === `${submenu.link}/`) {
          return true;
        }

        // Kiểm tra nested submenus
        if (submenu.submenus) {
          return submenu.submenus.some(
            (nested) =>
              pathname === nested.link || pathname === `${nested.link}/`
          );
        }

        return false;
      });
    }

    return false;
  };

  // Hàm kiểm tra link có phải là external không
  const isExternalLink = (link: string): boolean => {
    return (
      link.startsWith("http://") ||
      link.startsWith("https://") ||
      link.startsWith("//")
    );
  };

  // Render submenus
  const renderSubmenu = (
    submenus: Submenu[] = [],
    parentId: number,
    level: number = 0
  ) => {
    if (!submenus || submenus.length === 0) return null;

    return submenus.map((submenu, i) => {
      const hasChildren = submenu.submenus && submenu.submenus.length > 0;
      const menuKey = `${parentId}-${i}-${level}`;
      const isExpanded = expandedSubMenus.includes(menuKey);
      const isActive =
        pathname === submenu.link || pathname === `${submenu.link}/`;

      // Kiểm tra nếu link là external
      const isExternal = isExternalLink(submenu.link || "");

      return (
        <li
          key={`${parentId}-${i}`}
          className={`${hasChildren ? "menu-item-has-children" : ""} ${
            isActive ? "active" : ""
          }`}
        >
          {isExternal ? (
            <a
              href={submenu.link || "#"}
              className={isActive ? "active" : ""}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (hasChildren && submenu.link === "#") {
                  e.preventDefault();
                  toggleSubMenu(menuKey);
                }
              }}
            >
              {submenu.title}
              {hasChildren && (
                <button
                  className="dropdown-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleSubMenu(menuKey);
                  }}
                  aria-label={isExpanded ? "Thu gọn" : "Mở rộng"}
                ></button>
              )}
            </a>
          ) : (
            <Link
              href={submenu.link || "#"}
              className={isActive ? "active" : ""}
              onClick={(e) => {
                if (hasChildren && submenu.link === "#") {
                  e.preventDefault();
                  toggleSubMenu(menuKey);
                }
              }}
            >
              {submenu.title}
              {hasChildren && (
                <button
                  className="dropdown-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleSubMenu(menuKey);
                  }}
                  aria-label={isExpanded ? "Thu gọn" : "Mở rộng"}
                ></button>
              )}
            </Link>
          )}

          {hasChildren && isExpanded && (
            <ul className={`tp-submenu submenu level-${level + 1}`}>
              {renderSubmenu(submenu.submenus, parentId, level + 1)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <ul className="main-menu">
      {headerMenuData.map((menu: MenuItem) => {
        const hasSubmenu =
          menu.hasDropdown && menu.submenus && menu.submenus.length > 0;
        const isActive = isMenuActive(menu.link, menu.submenus);
        const isExpanded = expandedMainMenus.includes(menu.id);

        // Kiểm tra nếu link là external
        const isExternal = isExternalLink(menu.link);

        return (
          <li
            key={menu.id}
            className={`${hasSubmenu ? "has-dropdown" : ""} ${
              isActive ? "active" : ""
            }`}
            onMouseEnter={() => hasSubmenu && setHoveredMenu(menu.id)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            {isExternal ? (
              // External link - mở tab mới
              <a
                href={menu.link}
                className={isActive ? "active" : ""}
                target="_blank"
                rel="noopener noreferrer"
                aria-current={isActive ? "page" : undefined}
                onClick={() => {
                  // Đóng tất cả dropdown khi click vào menu chính
                  if (!hasSubmenu) {
                    setExpandedMainMenus([]);
                    setExpandedSubMenus([]);
                  }
                }}
              >
                {menu.title}
                {hasSubmenu && (
                  <button
                    className="dropdown-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleMainMenu(menu.id);
                    }}
                    aria-label={isExpanded ? "Thu gọn" : "Mở rộng"}
                    aria-expanded={isExpanded}
                  ></button>
                )}
              </a>
            ) : (
              // Internal link - dùng Link của Next.js
              <Link
                href={menu.link}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "page" : undefined}
                onClick={() => {
                  // Đóng tất cả dropdown khi click vào menu chính
                  if (!hasSubmenu) {
                    setExpandedMainMenus([]);
                    setExpandedSubMenus([]);
                  }
                }}
              >
                {menu.title}
                {hasSubmenu && (
                  <button
                    className="dropdown-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleMainMenu(menu.id);
                    }}
                    aria-label={isExpanded ? "Thu gọn" : "Mở rộng"}
                    aria-expanded={isExpanded}
                  ></button>
                )}
              </Link>
            )}

            {hasSubmenu && (isExpanded || hoveredMenu === menu.id) && (
              <ul className="tp-submenu submenu">
                {renderSubmenu(menu.submenus, menu.id)}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

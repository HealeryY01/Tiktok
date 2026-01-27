import mobileMenuData from "@/data/header-menu/mobileMenuData";
import React, { useState } from "react";
import Link from "next/link";

const MainMobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = (id: number) => {
    setActiveMenu((prev) => (prev === id ? null : id));
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (key: string) => {
    setActiveSubmenu((prev) => (prev === key ? null : key));
  };

  // Render submenu đệ quy (multi-level)
  const renderSubmenus = (submenus: any[], parentKey: string) => {
    return (
      <ul className="tp-submenu submenu">
        {submenus.map((item, index) => {
          const currentKey = `${parentKey}-${index}`;
          const hasChild = item.submenus && item.submenus.length > 0;

          return (
            <li
              key={currentKey}
              className={hasChild ? "menu-item-has-children" : ""}
            >
              <Link
                href={item.link}
                onClick={(e) => {
                  if (hasChild) {
                    e.preventDefault();
                    toggleSubmenu(currentKey);
                  }
                }}
              >
                {item.title}
              </Link>

              {/* submenu cấp sâu */}
              {hasChild && (
                <>
                  <ul
                    className="tp-submenu submenu"
                    style={{
                      display: activeSubmenu === currentKey ? "block" : "none",
                    }}
                  >
                    {renderSubmenus(item.submenus, currentKey)}
                  </ul>

                  <button
                    className={`tp-menu-close ${
                      activeSubmenu === currentKey ? "active" : ""
                    }`}
                    onClick={() => toggleSubmenu(currentKey)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <ul className="mobile-menu">
      {mobileMenuData.map((menuItem) => {
        const hasDropdown = menuItem.submenus && menuItem.submenus.length > 0;

        return (
          <li key={menuItem.id} className={hasDropdown ? "has-dropdown" : ""}>
            <Link
              href={menuItem.link}
              onClick={(e) => {
                if (hasDropdown) {
                  e.preventDefault();
                  toggleMenu(menuItem.id);
                }
              }}
            >
              {menuItem.title}
            </Link>

            {/* level 1 submenu */}
            {hasDropdown && (
              <>
                <div
                  style={{
                    display: activeMenu === menuItem.id ? "block" : "none",
                  }}
                >
                  {renderSubmenus(menuItem.submenus!, `menu-${menuItem.id}`)}
                </div>

                <button
                  className={`tp-menu-close ${
                    activeMenu === menuItem.id ? "active" : ""
                  }`}
                  onClick={() => toggleMenu(menuItem.id)}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MainMobileMenu;

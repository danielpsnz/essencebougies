// React y Librerías Externas
import React, { useContext, useEffect, useState } from "react";

// Recursos y Archivos Locales
import { SidebarContext } from "../../contexts/SidebarContext";
import { CartContext } from "../../contexts/CartContext";
import { Logo, MainNav } from "./index.js";

// Imágenes locales
import LogoImagenLight from "../../assets/images/Logo_empresa_principal.png";
import LogoImagenDark from "../../assets/images/Logo_empresa_beige.png";
import Perfil from "../../assets/images/Imagen_perfil_provisional.jpeg"

// Iconos
import { BsBag } from "react-icons/bs";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const mainNavItems = [
  { url: "/products", label: "Productos", current: false },
  { url: "/the_essence", label: "The Essence", current: false },
  { url: "/sobre_nosotros", label: "Sobre nosotros", current: false }
];

const Navigation = () => {
  // Navigation state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [darkMode, setDarkMode] = useState(false);

  // Event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  // Cambia el tema en el DOM
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Disclosure as="nav"
      className={`${
        isActive ? "bg-white dark:bg-slate-800 py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-3">
        <div className="relative flex h-16 items-center justify-between">
          <div className="container mx-auto flex items-center justify-between h-full">
            <div className="absolute inset-y-0 left-3 flex items-center">
              {/* Mobile menu button*/}
              <div className="-mr-2 flex lg:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-3 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>

            <div className="flex flex-1 items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 lg:mt-2 xl:mt-4">
                <Logo src={darkMode ? LogoImagenDark : LogoImagenLight} alt="Logo de la empresa" className="h-14 w-auto mt-3" />
              </div>

              <div className="hidden sm:ml-2 lg:block xl:block">
                <MainNav items={mainNavItems} classNameDiv="flex space-x-6 lg:space-x-3 mt-5" />
              </div>
            </div>
      
            <button 
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="text-2xl mt-2 hidden md:block"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>

            <div className="ml-3 flex items-center space-x-4">
              {/* cart */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer flex absolute"
              >
                <BsBag className="text-2xl mt-2" />
                <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white dark:text-black rounded-full flex justify-center items-center">
                  {itemAmount}
                </div>
              </div>
            </div>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-10 mt-2 hidden md:block">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 dark:bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-800 dark:focus:ring-offset-gray-200">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="Avatar"
                    src={Perfil}
                    className="w-8 h-8 rounded-full"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-slate-900 py-1 shadow-lg ring-1 ring-black/5 dark:ring-white/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-900 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-900 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                </MenuItem>
                
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 data-[focus]:bg-gray-100 dark:data-[focus]:bg-gray-900 data-[focus]:outline-none"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <MainNav items={mainNavItems} classNameDiv="space-y-1 px-10 pb-3 pt-2" />
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navigation;
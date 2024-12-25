// React y Librerías Externas
import React, { useContext, useEffect, useState } from "react";

// Recursos y Archivos Locales
import { SidebarContext } from "../../contexts/SidebarContext";
import { CartContext } from "../../contexts/CartContext";
import { Logo } from "./index.js";
import { fetchImages } from '../../server';

import Velas from "../../assets/images/Photoroom_20241219_205717.JPG";

// Iconos
import { BsBag } from "react-icons/bs";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

// Páginas locales
import Blog from "../../pages/Blog";
import About from "../../pages/About";

const categories = [
  {
    id: 1,
    name: 'Velas aromáticas',
    href: '/productlist',
    imageSrc: Velas,
    imageAlt: "Vela aromática pequeña",
  },
  {
    id: 2,
    name: 'Ceras aromáticas',
    href: '/productlist',
    imageSrc: 'data:image/jpeg;base64,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',
    imageAlt: "Caja de ceras aromáticas",
  },
  {
    id: 3,
    name: 'Reposiciones para velas',
    href: '/productlist',
    imageSrc: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFRAVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAPFS0dFR0tLS0tLSsrNysrLSstKzAtKzArKy0tLS03KystMDcrLTctKystLS0uLSstKystKy0tK//AABEIAOAA4AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAYFBwj/xAA8EAACAQMDAQMJBQcEAwAAAAAAAQIDBBEFEiExBkFRBxMiYXGBkaGxIzJS0fAUYnKCkrLBQ6LC4TM0U//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIBEBAQADAAIBBQAAAAAAAAAAAAECAxEhMRIEIjJBUf/aAAwDAQACEQMRAD8A8biTRIooliZaSxPQfI9VxdTj+Kn9H/2efRNp5LKu2/j+9CS+gvoe3oDCA5qQULIkAhCEAkQXFBSROInRkdZ0pPPB53rekODbS4Pa7ugpIy2saXnPBqUeSYFg7esaS4NtI4+DSGJBwOwLBA3Akh2ApAMSCOwLADMCwOwJoKYLA/AAG4EHAsAZ2JNEiiTRLEp8TS9gau2+oPxlj4ozcEdjsxU23VGXhUj9cFH0S0JoWQM5qQUwCQBAARKCIQAHJ+wr3dspLoToIGP1bTM54MJrGkOLbSPYrq3UkZnVdMzng1KPKHEODu6xpTi20jiuJUMwLA/AsEUzAsD8CwEMwBoe0JoBgGiTAGgqPAmh4mijMxJoEMSaBYJYl/SpYrU34Tj/AHIoRLVvLDT8Gn8GVH0pSfCfqX0HMrafU3UqcvGEfoTyOakxCYgExITAiUEWRAAchIbFjkwD4la7tkywkFIKx+radnPBhtW01xbaR69d2yZl9V03PcWVHme0GDs6npji8pHKcSoZgWB+BYAjwJofgWAGYA0PwJoCPAGiTaLaFZOBNEhgTRKJoE8CvAsQKj6G7N1N1rRf7kfodFo4XYerusaL/dx8Du5MVQYMiEAmAcxpARCQgFEKAEBCjIQUwDFZKd3apltIIGO1TTvUY/U9NxykerXdrlGZ1PT+vBR5w4AwdjU7BxeUctxKI8AwSbRbSIjwJoe0JooicQYJMAaAxsSeJBAmiFTQLFMrwJ6ZYle3eTatusYLwcl8zUmG8k9bNtOP4Zv58m5RKoCQhMyEwYCBgEAggFAYhAEP67gIKX6RAkOTEkJIKOPoUby2yXsBce4DFapp+c8GR1CwcW8Hqd7aJmZ1PT+vBpGCcQbTp39i4voUdoEOAOJNtA0UQOI1omaGtBGGiTRIYksQ0mgT0yCBNAsZeoeSCpxWj7GekHlHkkr4r1I/ih9GerkqwmNYWIyEJgQQEESCQJCFgQBwHAEOiFH/ALCgoSAAUg4CvzADjk5t7Z5OpgEo5Aw+paf14MveWTi+D069s85M1qVh14NDEOI1xOle2bj3FCSKIZIjaJ2hkkEYCBLEhiTRCpoksCGBNAI2fkxqYvIrxi0ezHg/Yu8VK7pTbws4fvPdYSTSa6MlBEFgZAQobEKCnCExMgQgsTASHwGIcmBIIA5EUQpAwOQQsCSF+vqJFAlHP6Zzb6zydPIpxyBhdTsDLXtq4s9Nv7TJmNTsOvBqDGSI5Iv31q4tlCRUeexJokaJIhUsSWJFEliEWKTPX/J92jVemqM39pDhetHj8Do6VfSoVI1IPmL+K70B9AtCwc/RNVhc0o1IvquV4M6DMgRQ7aNJCKGB2AqI2pJR5bSzwstLnwXrAWBJD1HgDiAwcmNaFkglix2Sre3caVOVSfSKz7X3Jetvg8pv+2lzb768are+TapzzOHV9E36K/hxwkc8tkxymP7rrhquctnqPYkHJluwXaapqFt5+pQ8ziThFqTlGphLMo5SaSeVjnp16mmydK5pGwIZkLl+uAhyYcjExZKDOCZyL+0ydfP66DJwyuhYMHqdj6jK31s4npuoWecmW1Ox68FHiRJAYx8QJokkSKBNEImgTRIIE8SjU9iNfdtVUZP7Obw14PxPYITUopp5TR89wPS/J/2g3x/Z6j5X3W+9eBKN6sdw5IbBmb17VqkayjS34hFuonBOk1jOXym8Z8V0R59+7HVj8snXTqy25cxaN3C6RTfyXx/Iy/b+pJ0IbsL7VcfyT7yHS+13pKEoSmmn6cYPnv6L0Uks97fC8TtR12nUaikk3zHeopvlrMc9enceXLfNk53nXfHVlqyls9MP2eupq4pJTmk5LKUpJNc9cM9Fpyfi/izOah2blUmqlKcac8p5SWPgu/BcoaLdLrefCnH8y6scsZy03ZY5WWRoKdNvvOBedqadKtOjOnP0HjdFxeeE+jx4nUsLKvH71fevB04p/FMzus9lbqrXq1YRW1yW3dJJyxFJtL2rvwTZnsk+3ymnHXlb8/Tl9tNY/aaeyi5RpxW6pJrGM5XTxxwvHc30ieX6zewr1qdPLjRi4xcopyahlJyS8VHuPU9LrfsNSpG6hJb4x2pR3p7W88x47y9R1mym/uKPtpSXzwb1Z+s8vydNuUxl14+mp0iFFUKSt8eZVOKpY6bMce/xzznOeS3gr6dWhJR24xnCx7Ohe816z1S98vEgCn6h7g/AG0oCkFSFgCRQX0C39fEa/wBe8SRUNq000cTULTOeDuIir0coD5ZYYiYomxNEmiQxJokRNAmiWtH0O5uX9jRlNfi+7Be2bwv8m70byaLiVzW/kpdPY5yX0XvFsgwFKLbSSbb6JJtv2JGv7Pdj7yUo1MeYSaalP73ugufjg9H0rR7e3WKNKEPGWMyftm+X8To4MXP+Lwy3ptRSby8cvGM+4Zq+jSr04OFSVOSeXhvE498ZJdUywonUt4+gv13nm+okyx5l5jpryuN7Hl9/2ecJxpOnOEMuXnKKk13vZzuwm3zx8DkU7V0p7Ku+p5t4gpzhJYy/Se3GzGE8ZeOeD2GrE4WrWNOrxUgpLOcNHguic5Mntx+p7+UZOyvKsd01Nbdr2tKUouaSwtyW3Pedax1uqoKVVJ7cecaWGk+Iywm85fHA65t6cafmoQUI5ziOV9DhXVrRxjY+/OJS56cPPXohMN0smOU4fPVlPunl3ta1SW1VKVV7XF7IU87pvv5T46P2HJq9r7mlRgqcZyknion5qpzLa8R5y/vcJNvg40LiNKDpRh6Od3WeU+ejT4znlLqKz1NUs+bhGGeuF3+OX3+suGnOZXLLMu3X8ZJj3jYPX2oRdzR21MLMcNNLxxyPqavSi8+i44ysdc+D7vgzIahr1WrHZKbaOVK4k+86YTKXzl1wyuN9Tjfadrnn7qnFcRTeF/LLl+s12TxTS9SnSrwnB4az1WV0a5RpX2wuvxQ/oie7X3nl58vb0VyA2efU+21wusaUv5ZL6Mv2/buP+pRa9cJKXyePqdOI2OQbjj2vaa0qdKyi/CpmHzfD9zDW7RWketxD3Ny/tTHB19w6OPUZyfa+zTx51v1qnVx9DqWd7SrR3UpxmvGLzj2rqveXyL+0bIqzqY7yrV1CUfB+1fkB8zD7elKclGEZSk+kYpyk/ZFcs9P0XyW01iV1Wc3/APOlmMPY5v0pe7abvS9JoW8dtClCmu/akm/4pdZP2s18ojynRPJzeVcOrtt4/v8ApVH7KcXx72n6jeaP2Es6GG4OtP8AFVw17oL0fkzTjkZuVAhHHC4S6JcJEsUNiiSKM1T4xJYwBBFiETKhCmXqK9EhhEs0lwcdvoivWRy7yJ1qyObdo8zpGevUcG8iaO9icG8iai1n7uOWVthfrw5IfNm4KrgRVVhF2cCldvCNyIp2svtY+/6M6U5HBoV/tc+Cf5HRVc9OHpzqzKYx1CF1CKczbKy6pFKsV3UIp1Cje9m+z9ldwc41a26OFODdOLi+7pF5T7maOx7MW1CSnTVRSXf5yfwaTSa9TPM+yGoSo3lJxfE5KnJdzjN459jw/cewV5mb0QV5nKu6hbuKhybqoIO+HcMwFIgfkdEYh6CpEPiMQ+KMixBksZFZSJYSMqtRkWKEinGZJGZjKdFmsjmXcS/Gr3PlFa4ot/ckv4ZZX+5fkcMsK3Kz94jh3iNBf0qq+9Rm/XDbNfCL3fIzd9eU4/f3w/ip1l9YmfXtpyK8eSleVXHZh4zNJ9OmGWrnU7Zf6jfshP8AyjgavrVNuCgm9s9z3YWVhrC+JueZ4R2apm9d1OMFy+e5Lqxl7e3lb/x0ppP8EJzfxx/g5kOyt5N5/Zrht97p1PrJHowwn7YtVdPuZSm2+87MKhNYdib/AD/6s17ZUo/3SR2qHYO/fWnCH8VSH/HJ28MOIqo2VU1dDycXT+/Vox9jqS/4ov0fJn+O6/ppf5cv8F7BgnUI5TPU7Xyc2kXmc61T1OUYx/2xT+ZodP0W2t//AA0YQf4sZn/W8y+ZPkMJ2F7KVN8bqunGMcSpRyt0n3Sa7o4fqefnu7ioT1pnOuJj2KtzUOTdVC7czORdTKNomEbkcZUUgoamOQDkx6mR4DgglUiRTK6Y5MnFWVUJI1SnuHKROC6qwfOlLcDeTguOqNdYqbwZHBLNRfWKftSI2kuiS9iQMgyXiE2wCEXgMSREaHoByCNFkoc2RVJilIr1ZlEdaoc+4qE1aoc6vUNIr3Mzj3dQvXNQ415VKPSEHIwRhT8hUhiCgHpjkxgsgPyLIzIcgPQckYckD8ibGZE2Tinbg7hiCXgO4I0OSoQUAKAcg5GiAdkUpAyRTkAKkyrWmPqSKdaRYiGtM59eoT15nOuKhRVuahxb2qX7qocK+qmoj//Z',
    imageAlt: "Ejemplo de reposición de velas aromáticas",
  },
  {
    id: 3,
    name: 'Decoración para el hogar',
    href: '/productlist',
    imageSrc: 'data:image/jpeg;base64,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',
    imageAlt: "Conjunto de bandejas de resina y decoración para el hogar",
  }
]

const navigation = [
  { href: "/", name: "Productos", current: false },
  { href: {Blog}, name: "The Essence", current: false },
  { href: {About}, name: "Sobre nosotros", current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [darkMode, setDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [logoUrl, setLogoUrl] = useState(null);
  const [perfil, setPerfil] = useState(null);

    // Event listener
    useEffect(() => {
      window.addEventListener("scroll", () => {
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
      });
    });

    useEffect(() => {
      const loadLogo = async () => {
          const path = darkMode 
              ? 'Principales_pagina_web/Logo_empresa_beige.png' 
              : 'Principales_pagina_web/Logo_empresa_principal.png';

          const url = await fetchImages(path); // Llama a la función para obtener la URL
          setLogoUrl(url); // Actualiza el estado con la URL
      };

      loadLogo();
    }, [darkMode]);

  useEffect(() => {
    const loadProfileImage = async () => {
        // Aquí pasas la ruta correcta desde Firebase Storage
        const url = await fetchImages('Principales_pagina_web/Imagen_perfil_provisional.jpeg');
        setPerfil(url); // Actualizas el estado con la URL obtenida
    };

    loadProfileImage(); // Llama la función cuando el componente se monta
    }, []);
  
    // Cambia el tema en el DOM
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);

    const handleMouseEnter = () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        setCloseTimeout(null);
      }
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setShowDropdown(false);
      }, 500); // 0,5 segundos
      setCloseTimeout(timeout);
    };

  return (
    <Disclosure as="nav" className={`fixed w-full z-10 lg:px-8 transition-all ${
      isActive
        ? "py-4 shadow-md lg:bg-white lg:dark:bg-slate-800"
        : "py-6 lg:bg-transparent lg:dark:bg-transparent"
    } bg-white dark:bg-slate-800`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#438382] dark:hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block w-6 h-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden w-6 h-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="absolute left-1/2 transform -translate-x-1/2 lg:pt-3 sm:-mt-8">
              <Logo src={logoUrl} alt="Logo de la empresa" className="h-14 w-auto mt-3" />
            </div>

            <div className="hidden lg:block md:-ml-10">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    onMouseEnter={() => item.name === "Productos" && handleMouseEnter()}
                    onMouseLeave={() => item.name === "Productos" && handleMouseLeave()}
                    className="relative"
                  >
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-black' : 'text-gray-800 dark:text-gray-100 hover:bg-[#438382] dark:hover:bg-slate-800 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>

                  {item.name === "Productos" && showDropdown && (
                        <div
                          className="absolute left-0 mt-6 h-96 w-max rounded bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="px-4 py-6">
                            <div className="mt-4 grid grid-cols-4 gap-4">
                              {categories.map((product) => (
                                <a href={product.href}>
                                <div key={product.id} className="block items-center space-x-4">
                                  <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="h-60 w-60 rounded-md object-cover"
                                  />
                                  <div>
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mt-6 flex justify-center ">
                                      {product.name}
                                    </h3>
                                  </div>
                                </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <button 
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="text-2xl mt-2 hidden md:block"
            >
              {darkMode ? '🌙' : '☀️'}
          </button>
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="sm:mr-8 flex items-center space-x-4">
              {/* cart */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer flex absolute"
              >
                <BsBag className="text-2xl mt-2 dark:text-white" />
                <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white dark:text-black rounded-full flex justify-center items-center">
                  {itemAmount}
                </div>
              </div>
            </div>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3 mt-2 hidden lg:block">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={perfil}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Tu perfil
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Ajustes
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Desconectarse
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            if (item.name === "Productos") {
              return (
                <Disclosure key={item.name} as="div" className="space-y-1">
                  <DisclosureButton
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-[#438382] dark:hover:bg-gray-900 hover:text-white"
                  >
                    {item.name}
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="space-y-1 pl-5">
                    {categories.map((product) => (
                      <a
                        key={product.id}
                        href={product.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-gray-100"
                      >
                        {product.name}
                      </a>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              );
            }
            return (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-black"
                    : "text-gray-900 dark:text-gray-100 hover:bg-[#438382] dark:hover:bg-slate-900 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
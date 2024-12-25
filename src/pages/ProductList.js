import VainillaTabaco_1 from "../assets/images/Photoroom_20241219_210114.png";
import Marrakech from "../assets/images/Photoroom_20241219_210039.png";
import Florencia from "../assets/images/Photoroom_20241219_205931.png";

import Cafe from "../assets/images/IMG_2475.jpg.webp";
import Lavanda from "../assets/images/IMG_2470.jpg.webp";

const Ciudades_products = [
  {
    id: 1,
    name: 'Vela Havana | Vainilla + Tabaco',
    href: '/product',
    price: '7.50€',
    imageSrc: VainillaTabaco_1,
    imageAlt: 'Vela de vainilla y tabaco.',
  },
  {
    id: 2,
    name: 'Vela Marrakech | Hierba de limón + Jazmín + Almizcle',
    href: '/product',
    price: '7.50€',
    imageSrc: Marrakech,
    imageAlt: 'Vela de hierba de limón, jazmín y almizcle.',
  },
  {
    id: 3,
    name: 'Vela Florencia | Pétalo de rosa + Madera de Sándalo',
    href: '/product',
    price: '7.50€',
    imageSrc: Florencia,
    imageAlt: 'Vela de pétalo de rosa y madera de sándalo',
  },
]

const Latte_products = [
  {
    id: 1,
    name: 'Vela caffè latte | Espresso martini',
    href: '/product',
    price: '16.40€',
    imageSrc: Cafe,
    imageAlt: 'Vela de espresso martini',
  },
  {
    id: 2,
    name: 'Vela lavanda latte | Lavanda, camomila y vainilla',
    href: '/product',
    price: '16.40€',
    imageSrc: Lavanda,
    imageAlt: 'Vela de lavanda, camomila y vainilla',
  },
]

export default function Example() {
  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 py-8 mt-8">Colección ciudades del mundo</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Ciudades_products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 py-8">Colección caffè latte</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Latte_products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
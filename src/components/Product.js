import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'

import Photo_3 from "../assets/images/Photoroom_20241208_172633.JPG";
import Photo_4 from "../assets/images/Photoroom_20241208_173253.JPG";
import Photo_5 from "../assets/images/Photoroom_20241208_175401.JPG";
import Photo_6 from "../assets/images/Photoroom_20241208_175527.JPG";

const product = {
  name: 'Vela Havana | Vainilla + Tabaco',
  price: '7.50€',
  price_2: '12.50€',
  price_pack: '30€',
  href: '/',
  breadcrumbs: [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Velas aromáticas', href: '/productlist' },
  ],
  images: [
    {
      src: Photo_5,
      alt: '',
    },
    {
      src: Photo_6,
      alt: '',
    },
    {
      src: Photo_3,
      alt: '',
    },
    {
      src: Photo_4,
      alt: '',
    },
  ],
  colors: [
    { name: 'Blanco', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gris', class: 'bg-gray-300', selectedClass: 'ring-gray-400' },
    { name: 'Amarillo pastel', class: 'bg-yellow-200', selectedClass: 'ring-gray-400' },
    { name: 'Azul pastel', class: 'bg-blue-200', selectedClass: 'ring-gray-400' },
    { name: 'Beige', class: 'bg-[#d5bca2]', selectedClass: 'ring-gray-400' },
    { name: 'Rosa pastel', class: 'bg-pink-200', selectedClass: 'ring-gray-400' },
    { name: 'Verde pastel', class: 'bg-green-200', selectedClass: 'ring-gray-400' },
    { name: 'Naranja pastel', class: 'bg-orange-200', selectedClass: 'ring-gray-400' },
  ],
  sizes: [
    { name: '90g', inStock: true },
    { name: '150g', inStock: true },
    { name: 'Set de velas', inStock: true },
  ],
  description:
    'Déjate envolver por la elegancia clásica donde la suavidad cálida de la vainilla se entrelaza con la profunda y distinguida esencia del tabaco. Esta combinación sofisticada evoca la atmósfera de una tarde acogedora frente al fuego, creando una experiencia que destila lujo y un encanto delicadamente cautivador.',
  highlights: [
    '100% cera de soja biodegradable',
    'Mecha de madera crepitante',
    'Vaso fabricado a mano con resina natural',
    'Perfume de vainilla y tabaco de alta calidad',
  ],
  details: [
    'Cada una de nuestras velas aromáticas está creada pensando en ti y en tu hogar. La cera utilizada es 100% vegetal, elaborada exclusivamente con cera de soja. Los tarros, también hechos a mano, están confeccionados con resina natural y sostenible, destacando por su diseño artesanal y compromiso con el medio ambiente.',
    'Estas velas son ideales para transformar dormitorios, baños y salas de estar pequeños o medianos en un refugio acogedor y lleno de energía positiva.',
    'Essence Bougies selecciona únicamente los ingredientes de la más alta calidad. Cada uno de nuestros productos es completamente libre de crueldad animal y elaborado con los ingredientes más puros, cuidando cada detalle desde el inicio hasta el final. Todos los componentes que utilizamos – cera, aceites y mechas – están libres de ftalatos y de cualquier otra sustancia perjudicial común en la industria de las fragancias, para garantizarte una experiencia segura y placentera.',
  ],
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="pt-32">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            alt={product.images[0].alt}
            src={product.images[0].src}
            className="hidden size-full rounded-lg object-cover lg:block"
          />
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              alt={product.images[1].alt}
              src={product.images[1].src}
              className="aspect-[3/2] w-full rounded-lg object-cover"
            />
            <img
              alt={product.images[2].alt}
              src={product.images[2].src}
              className="aspect-[3/2] w-full rounded-lg object-cover"
            />
          </div>
          <img
            alt={product.images[3].alt}
            src={product.images[3].src}
            className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto"
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'size-5 shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-[#438382] hover:text-[#336362]">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Elige el color de tu vaso:</h3>

                <fieldset aria-label="Elige un color" className="mt-4">
                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center gap-x-3">
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={classNames(
                          color.selectedClass,
                          'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(color.class, 'h-8 w-8 rounded-full border border-black/10')}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Elige el tamaño de tu vaso:</h3>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-3 gap-5"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={classNames(
                          size.inStock
                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                          'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                        )}
                      >
                        <span>{size.name}</span>
                        {size.inStock ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 size-full stroke-2 text-gray-200"
                            >
                              <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#438382] px-8 py-3 text-base font-medium text-white hover:bg-[#336362] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Añadir a la bolsa
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Descripción</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Especificaciones</h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Detalles</h2>
                {product.details.map((detail) => (
                    <div key={detail} className="mt-4 space-y-6">
                      <p className="text-sm text-gray-600">{detail}</p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
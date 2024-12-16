const productosDb = [
  
  {
    
    nombre: "iPhone 14",
    stock: 20,
    descripcion:
      "El iPhone 14 ofrece una pantalla Super Retina XDR de 6.1 pulgadas con una luminosidad increíble, ideal para ver contenido en HDR. Su cámara principal de 12 MP tiene mejoras significativas en fotografía nocturna y video, además del procesador A15 Bionic para un rendimiento excepcional. Con Face ID, una mayor autonomía y resistencia a golpes y agua (IP68), es una opción ideal para quienes buscan lo último en tecnología de Apple.",
    precio: 899,
    imagen: "https://i.postimg.cc/vBb0t3Pv/Iphone-14.webp",
    category: "Apple",
  },
  {
    
    nombre: "iPhone 15 Pro",
    stock: 10,
    descripcion:
      "El iPhone 15 Pro llega con una pantalla Super Retina XDR de 6.1 pulgadas y el potente chip A16 Bionic que ofrece un rendimiento inigualable. Ahora incluye el puerto USB-C para mayor velocidad de transferencia de datos. La cámara cuenta con un sensor de 48MP que mejora notablemente las fotos en condiciones de poca luz. Su diseño premium con acabados en titanio lo hace más ligero y resistente.",
    precio: 999,
    imagen: "https://i.postimg.cc/YqhbR4xT/Iphone-15.webp",
    category: "Apple",
  },
  {
    
    nombre: "iPhone 16 Pro",
    stock: 5,
    descripcion:
      "El iPhone 16 Pro está diseñado para quienes buscan lo mejor en tecnología. Con una pantalla Super Retina XDR de 6.1 pulgadas y el chip A17 Bionic, este dispositivo es más rápido y eficiente que nunca. Su cámara cuenta con un sistema avanzado de tres lentes, ideal para fotografía profesional. Además, la duración de la batería ha mejorado considerablemente, soportando todo el día con una sola carga.",
    precio: 1099,
    imagen: "https://i.postimg.cc/05tV7G7p/Iphone-16.webp",
    category: "Apple",
  },
  {
    
    nombre: "Samsung Galaxy S21",
    stock: 12,
    descripcion:
      "El Samsung Galaxy S21 presenta una pantalla Dynamic AMOLED 2X de 6.2 pulgadas con tasa de refresco de 120Hz, lo que lo hace perfecto para una experiencia visual fluida y vibrante. Su procesador Exynos 2100 ofrece un rendimiento de alta gama, mientras que la cámara de 64MP permite grabar videos en 8K. Además, tiene carga rápida de 25W y es resistente al agua y al polvo (IP68).",
    precio: 799,
    imagen: "https://i.postimg.cc/SxbC9j16/Samsung-S21.webp",
    category: "Samsung",
  },
  {
  
    nombre: "Samsung Galaxy S22",
    stock: 18,
    descripcion:
      "El Samsung Galaxy S22 destaca por su pantalla Dynamic AMOLED de 6.1 pulgadas con una tasa de refresco de 120Hz y un brillo máximo impresionante, ideal para el uso bajo la luz directa del sol. Con el procesador Snapdragon 8 Gen 1 y cámaras mejoradas, puedes esperar un rendimiento de primer nivel en cualquier tarea. Además, su batería de 3700mAh soporta carga rápida de 25W.",
    precio: 899,
    imagen: "https://i.postimg.cc/zBQRGfRR/Samsung-S22.webp",
    category: "Samsung",
  },
  {
    
    nombre: "Samsung Galaxy S23",
    stock: 10,
    descripcion:
      "El Samsung Galaxy S23 ofrece una pantalla Dynamic AMOLED de 6.1 pulgadas con una tasa de refresco de 120Hz, ideal para gamers y usuarios exigentes. Su procesador Snapdragon 8 Gen 2 le proporciona un rendimiento inigualable, mientras que sus cámaras de 50MP con visión nocturna mejorada te permiten capturar fotos excepcionales en cualquier condición de luz.",
    precio: 999,
    imagen: "https://i.postimg.cc/1tXqSF4Q/Samsung-S23.webp",
    category: "Samsung",
  },
  {
    
    nombre: "Samsung Galaxy Z Fold 4",
    stock: 6,
    descripcion:
      "El Samsung Galaxy Z Fold 4 es la vanguardia de los smartphones plegables. Con una pantalla interna Dynamic AMOLED de 7.6 pulgadas, se convierte en una mini-tablet cuando lo abres. El procesador Snapdragon 8+ Gen 1 y las cámaras de 50MP te ofrecen un rendimiento sobresaliente, mientras que su diseño elegante y duradero lo convierte en un dispositivo innovador y funcional.",
    precio: 1799,
    imagen: "https://i.postimg.cc/SxL8fqHw/Samsung-Z-Fold.webp",
    category: "Samsung",
  },
  {
    
    nombre: "Xiaomi Mi 11",
    stock: 20,
    descripcion:
      "El Xiaomi Mi 11 ofrece una pantalla AMOLED de 6.81 pulgadas con una resolución WQHD+ para una experiencia visual impresionante. Con el procesador Snapdragon 888, podrás disfrutar de un rendimiento fluido incluso en las aplicaciones más exigentes. Su cámara principal de 108MP permite capturar fotos de alta calidad, mientras que su carga rápida de 55W te permite cargar el dispositivo al 100% en menos de una hora.",
    precio: 749,
    imagen: "https://i.postimg.cc/vZvhHW8g/Xiaomi-Mi-11.webp",
    category: "Xiaomi",
  },
  {
    
    nombre: "Xiaomi 12",
    stock: 15,
    descripcion:
      "El Xiaomi 12 llega con una pantalla AMOLED de 6.28 pulgadas y una tasa de refresco de 120Hz para una experiencia visual fluida. Equipado con el procesador Snapdragon 8 Gen 1, este smartphone es ideal para multitarea y juegos intensivos. Además, su sistema de cámaras de 50MP y 13MP ofrece excelentes resultados en fotografía y video, incluso en condiciones de poca luz.",
    precio: 849,
    imagen: "https://i.postimg.cc/mZ08dL6D/Xiaomi-Redmi-Note-12.webp",
    category: "Xiaomi",
  },
  {
    
    nombre: "Xiaomi 13",
    stock: 12,
    descripcion:
      "El Xiaomi 13 es un teléfono premium con una pantalla AMOLED de 6.36 pulgadas y diseño de bordes curvados. Viene con el procesador Snapdragon 8 Gen 2 para un rendimiento excepcional y su cámara de 50MP con OIS te permite tomar fotos estables y de alta calidad. Su batería de 4500mAh admite carga rápida de 67W, lo que significa que puedes cargarlo completamente en menos de 40 minutos.",
    precio: 949,
    imagen: "https://i.postimg.cc/yNQT0sZ7/Xiaomi-13.webp",
    category: "Xiaomi",
  },
  {
    
    nombre: "Xiaomi Redmi Note 12",
    stock: 25,
    descripcion:
      "El Xiaomi Redmi Note 12 tiene una pantalla AMOLED de 6.67 pulgadas con colores vibrantes y negros profundos, perfecto para disfrutar de contenido multimedia. Con un procesador Snapdragon 4 Gen 1 y una batería de 5000mAh, ofrece un rendimiento eficiente y una excelente autonomía. Es ideal para aquellos que buscan un teléfono asequible sin sacrificar calidad.",
    precio: 299,
    imagen: "https://i.postimg.cc/mZ08dL6D/Xiaomi-Redmi-Note-12.webp",
    category: "Xiaomi",
  },
  {
    
    nombre: "iPhone 12 (2022)",
    stock: 8,
    descripcion:
      "Este iPhone 12 reacondicionado sigue ofreciendo un rendimiento excelente con su chip A14 Bionic y una pantalla OLED de 6.1 pulgadas. Viene con una cámara dual de 12MP que permite grabar video en 4K. El dispositivo es completamente funcional, certificado y tiene garantía de 1 año, siendo una opción de alta calidad a un precio reducido.",
    precio: 599,
    imagen: "https://i.postimg.cc/J0JcwXdh/Iphone-12-2022.webp",
    category: "Reacondicionado",
  },
  {
    
    nombre: "Samsung Galaxy S20 (2022)",
    stock: 10,
    descripcion:
      "El Samsung Galaxy S20 reacondicionado es una excelente opción si buscas un dispositivo con pantalla AMOLED de 6.2 pulgadas y una cámara de 64MP. Con su procesador Exynos 990 y 8GB de RAM, ofrece un rendimiento sólido y fluido. Viene con garantía de 1 año y es una opción ideal para quienes buscan calidad a un precio accesible.",
    precio: 499,
    imagen: "https://i.postimg.cc/P5dbcPbt/Samsun-Galaxy-S20-2022.webp",
    category: "Reacondicionado",
  },
  {
    
    nombre: "Xiaomi Redmi Note 11 (2021)",
    stock: 15,
    descripcion:
      "Este modelo reacondicionado del Xiaomi Redmi Note 11 es ideal para quienes buscan un dispositivo económico y funcional. Con su pantalla AMOLED de 6.43 pulgadas y batería de 5000mAh, ofrece una excelente experiencia para el uso diario. Su procesador Snapdragon 680 te permitirá ejecutar apps y juegos básicos con fluidez.",
    precio: 199,
    imagen: "https://i.postimg.cc/fR57hD5Y/Xiaomi-Redmi-Note-11-2021.webp",
    category: "Reacondicionado",
  },
  {
    
    nombre: "Huawei P40 Pro (2023)",
    stock: 7,
    descripcion:
      "El Huawei P40 Pro reacondicionado tiene una cámara Leica de 50MP, lo que lo convierte en una opción ideal para los amantes de la fotografía. Con su pantalla OLED de 6.58 pulgadas y procesador Kirin 990 5G, este dispositivo sigue siendo muy competitivo en rendimiento. Viene con garantía de 1 año y es una gran opción para quienes desean un smartphone de alta gama a un precio más bajo.",
    precio: 699,
    imagen: "https://i.postimg.cc/ZYyLykKh/Huawei-P40-Pro.webp",
    category: "Reacondicionado",
  },
  {
    
    nombre: "iPhone X ",
    stock: 20,
    descripcion:
      "Este iPhone X en oferta tiene una pantalla Retina HD de 4.7 pulgadas, ideal para quienes prefieren un tamaño más compacto. Con su chip A11 Bionic y cámara de 12MP, sigue ofreciendo un excelente rendimiento para tareas cotidianas y fotografía. Además, su diseño en vidrio y acero inoxidable le da un toque de elegancia y resistencia.",
    precio: 429,
    imagen: "https://i.postimg.cc/pd6DpCwT/iPhone-X.webp",
    category: "Ofertas",
  },
  {
    
    nombre: "Samsung Galaxy A52",
    stock: 25,
    descripcion:
      "El Samsung Galaxy A52 es una excelente opción en la gama media, con una pantalla Super AMOLED de 6.5 pulgadas y una tasa de refresco de 90Hz. Su cámara cuádruple de 64MP te permite capturar fotos detalladas, y su batería de 4500mAh garantiza un día completo de uso. Además, con resistencia al agua (IP67) y un diseño moderno, es un dispositivo equilibrado.",
    precio: 349,
    imagen: "https://i.postimg.cc/h4x9t9pD/Samsung-Galaxy-A52.webp",
    category: "Ofertas",
  },
  {
    
    nombre: "Xiaomi Poco X3 Pro",
    stock: 30,
    descripcion:
      "El Xiaomi Poco X3 Pro es uno de los mejores smartphones de gama media, con un procesador Snapdragon 860 que garantiza un rendimiento fluido incluso en juegos exigentes. Su pantalla IPS LCD de 6.67 pulgadas con tasa de refresco de 120Hz ofrece una experiencia visual muy fluida. Además, su batería de 5160mAh te permitirá disfrutar de todo el día de uso.",
    precio: 229,
    imagen: "https://i.postimg.cc/GhxGkdW6/Xiaomi-Poco-X3-Pro.webp",
    category: "Ofertas",
  },
  {
    
    nombre: "OnePlus Nord CE 2",
    stock: 18,
    descripcion:
      "El OnePlus Nord CE 2 es un smartphone económico pero con características premium. Con una pantalla AMOLED de 6.43 pulgadas y carga rápida de 65W, es ideal para quienes necesitan velocidad. Su cámara principal de 64MP ofrece fotos nítidas, y el procesador MediaTek Dimensity 900 garantiza un rendimiento sólido para la mayoría de las aplicaciones.",
    precio: 399,
    imagen: "https://i.postimg.cc/kGrKy4XP/One-Plus-Nord-CE-2.webp",
    category: "Ofertas",
  },
];


export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error, intente mas tarde");
      } else {
        resolve(productos);
      }
    }, 1500);
  });
};



const productos = [
  {
    id: 1,
    nombre: "iPhone 13",
    stock: 15,
    descripcion:
      "Apple iPhone 13 con pantalla Super Retina XDR de 6.1 pulgadas y chip A15 Bionic.",
    precio: 799,
    imagen: "https://i.postimg.cc/pdD0jgBT/Iphone-13.webp",
    category: "Apple",
  },
  {
    id: 2,
    nombre: "iPhone 14",
    stock: 20,
    descripcion:
      "Apple iPhone 14 con pantalla Super Retina XDR de 6.1 pulgadas y mejoras en la cámara.",
    precio: 899,
    imagen: "https://i.postimg.cc/vBb0t3Pv/Iphone-14.webp",
    category: "Apple",
  },
  {
    id: 3,
    nombre: "iPhone 15 Pro",
    stock: 10,
    descripcion:
      "Apple iPhone 15 con pantalla Super Retina XDR de 6.1 pulgadas, chip A16 Bionic y USB-C.",
    precio: 999,
    imagen: "https://i.postimg.cc/YqhbR4xT/Iphone-15.webp",
    category: "Apple",
  },
  {
    id: 4,
    nombre: "iPhone 16 Pro",
    stock: 5,
    descripcion:
      "Apple iPhone 16 con pantalla Super Retina XDR de 6.1 pulgadas, chip A17 Bionic ",
    precio: 1099,
    imagen: "https://i.postimg.cc/05tV7G7p/Iphone-16.webp",
    category: "Apple",
  },
  {
    id: 5,
    nombre: "Samsung Galaxy S21",
    stock: 12,
    descripcion:
      "Samsung Galaxy S21 con pantalla Dynamic AMOLED de 6.2 pulgadas y procesador Exynos 2100.",
    precio: 799,
    imagen: "https://i.postimg.cc/SxbC9j16/Samsung-S21.webp",
    category: "Samsung",
  },
  {
    id: 6,
    nombre: "Samsung Galaxy S22",
    stock: 18,
    descripcion:
      "Samsung Galaxy S22 con pantalla Dynamic AMOLED de 6.1 pulgadas y procesador Snapdragon 8 Gen 1.",
    precio: 899,
    imagen: "https://i.postimg.cc/zBQRGfRR/Samsung-S22.webp",
    category: "Samsung",
  },
  {
    id: 7,
    nombre: "Samsung Galaxy S23",
    stock: 10,
    descripcion:
      "Samsung Galaxy S23 con pantalla Dynamic AMOLED de 6.1 pulgadas y mejoras en la cámara.",
    precio: 999,
    imagen: "https://i.postimg.cc/1tXqSF4Q/Samsung-S23.webp",
    category: "Samsung",
  },
  {
    id: 8,
    nombre: "Samsung Galaxy Z Fold 4",
    stock: 6,
    descripcion:
      "Samsung Galaxy Z Fold 4 con pantalla plegable Dynamic AMOLED de 7.6 pulgadas.",
    precio: 1799,
    imagen: "https://i.postimg.cc/SxL8fqHw/Samsung-Z-Fold.webp",
    category: "Samsung",
  },
  {
    id: 9,
    nombre: "Xiaomi Mi 11",
    stock: 20,
    descripcion:
      "Xiaomi Mi 11 con pantalla AMOLED de 6.81 pulgadas y procesador Snapdragon 888.",
    precio: 749,
    imagen: "https://i.postimg.cc/vZvhHW8g/Xiaomi-Mi-11.webp",
    category: "Xiaomi",
  },
  {
    id: 10,
    nombre: "Xiaomi 12",
    stock: 15,
    descripcion:
      "Xiaomi 12 con pantalla AMOLED de 6.28 pulgadas y procesador Snapdragon 8 Gen 1.",
    precio: 849,
    imagen: "https://i.postimg.cc/mZ08dL6D/Xiaomi-Redmi-Note-12.webp",
    category: "Xiaomi",
  },
  {
    id: 11,
    nombre: "Xiaomi 13",
    stock: 12,
    descripcion:
      "Xiaomi 13 con pantalla AMOLED de 6.36 pulgadas y diseño premium.",
    precio: 949,
    imagen: "https://i.postimg.cc/ncBTgy61/Xiaomi-13.webp",
    category: "Xiaomi",
  },
  {
    id: 12,
    nombre: "Xiaomi Redmi Note 12",
    stock: 25,
    descripcion:
      "Xiaomi Redmi Note 12 con pantalla AMOLED de 6.67 pulgadas y batería de 5000mAh.",
    precio: 299,
    imagen: "https://i.postimg.cc/mZ08dL6D/Xiaomi-Redmi-Note-12.webp",
    category: "Xiaomi",
  },
  {
    id: 13,
    nombre: "iPhone 12 (2022)",
    stock: 8,
    descripcion: "iPhone 12 reacondicionado con garantía de 1 año.",
    precio: 599,
    imagen: "https://i.postimg.cc/J0JcwXdh/Iphone-12-2022.webp",
    category: "Reacondicionado",
  },
  {
    id: 14,
    nombre: "Samsung Galaxy S20 (2022)",
    stock: 10,
    descripcion:
      "Samsung Galaxy S20 reacondicionado con pantalla AMOLED de 6.2 pulgadas.",
    precio: 499,
    imagen: "https://i.postimg.cc/P5dbcPbt/Samsun-Galaxy-S20-2022.webp",
    category: "Reacondicionado",
  },
  {
    id: 15,
    nombre: "Xiaomi Redmi Note 11 (2021)",
    stock: 15,
    descripcion:
      "Xiaomi Redmi Note 11 reacondicionado con batería de larga duración.",
    precio: 199,
    imagen: "https://i.postimg.cc/8PRBth6K/Xiaomi-Redmi-Note-11-2021.webp",
    category: "Reacondicionado",
  },
  {
    id: 16,
    nombre: "Huawei P40 Pro (2023)",
    stock: 7,
    descripcion: "Huawei P40 Pro reacondicionado con cámara Leica de 50MP.",
    precio: 699,
    imagen: "https://i.postimg.cc/ZYyLykKh/Huawei-P40-Pro.webp",
    category: "Reacondicionado",
  },
  {
    id: 17,
    nombre: "iPhone X ",
    stock: 20,
    descripcion: "iPhone X en oferta con pantalla Retina HD de 4.7 pulgadas.",
    precio: 429,
    imagen: "https://i.postimg.cc/pd6DpCwT/iPhone-X.webp",
    category: "Ofertas",
  },
  {
    id: 18,
    nombre: "Samsung Galaxy A52",
    stock: 25,
    descripcion:
      "Samsung Galaxy A52 en oferta con cámara cuádruple y pantalla de 6.5 pulgadas.",
    precio: 349,
    imagen: "https://i.postimg.cc/h4x9t9pD/Samsung-Galaxy-A52.webp",
    category: "Ofertas",
  },
  {
    id: 19,
    nombre: "Xiaomi Poco X3 Pro",
    stock: 30,
    descripcion: "Xiaomi Poco X3 Pro en oferta con procesador Snapdragon 860.",
    precio: 229,
    imagen: "https://i.postimg.cc/GhxGkdW6/Xiaomi-Poco-X3-Pro.webp",
    category: "Ofertas",
  },
  {
    id: 20,
    nombre: "OnePlus Nord CE 2",
    stock: 18,
    descripcion: "OnePlus Nord CE 2 en oferta con carga rápida de 65W.",
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



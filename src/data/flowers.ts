export const flowers = [
  {
    id: 'rose-red',
    name: 'Red Rose',
    price: 4.99,
    imageUrl: 'https://cms.interiorcompany.com/wp-content/uploads/2024/01/lincoln-red-rose-bush-types.jpg',
    color: 'red',
  },
  {
    id: 'rose-pink',
    name: 'Pink Rose',
    price: 4.99,
    imageUrl: 'https://bloomingmore.com/cdn/shop/products/BLROS60LPI50_A.jpg?v=1681767629',
    color: 'pink',
  },
  {
    id: 'lily-white',
    name: 'White Lily',
    price: 5.99,
    imageUrl: 'https://bunchesdirect.ca/cdn/shop/products/white-asiatic-lilies_80.jpg?v=1618012678',
    color: 'white',
  },
  {
    id: 'tulip-red',
    name: 'Red Tulip',
    price: 3.99,
    imageUrl: 'https://www.dutchgrown.com/cdn/shop/products/Tulip_Red_Impression-2.jpg?v=1679954449',
    color: 'red',
  },
  {
    id: 'orchid-purple',
    name: 'Purple Orchid',
    price: 6.99,
    imageUrl: 'https://t4.ftcdn.net/jpg/00/60/88/31/360_F_60883149_FGACCfqJ7h0zRIaFqAlqqZ3BBW5qcLvi.jpg',
    color: 'purple',
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    price: 4.49,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg',
    color: 'yellow',
  },
  {
    id: 'carnation-pink',
    name: 'Pink Carnation',
    price: 3.49,
    imageUrl: 'https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/c/a/carnation_pink_lemonade_carnation_stem_3.jpg',
    color: 'pink',
  },
  {
    id: 'hydrangea-blue',
    name: 'Blue Hydrangea',
    price: 5.49,
    imageUrl: 'https://plantura.garden/uk/wp-content/uploads/sites/2/2022/11/blue-hydrangea-flower.jpg',
    color: 'blue',
  },
] as const;

export const bouquetStyles = [
  {
    id: 'classic',
    name: 'Classic Round',
    description: 'Traditional round arrangement',
    priceMultiplier: 1,
  },
  {
    id: 'cascade',
    name: 'Cascade',
    description: 'Dramatic flowing arrangement',
    priceMultiplier: 1.2,
  },
  {
    id: 'hand-tied',
    name: 'Hand-Tied',
    description: 'Natural, garden-style bouquet',
    priceMultiplier: 1.1,
  },
] as const;

export const extras = [
  {
    id: 'ribbon',
    name: 'Satin Ribbon',
    price: 3.99,
    imageUrl: 'https://m.media-amazon.com/images/I/81VlCkZzRpL.jpg',
  },
  {
    id: 'vase',
    name: 'Glass Vase',
    price: 12.99,
    imageUrl: 'https://images.unsplash.com/photo-1578500351865-d6c3706f46bc',
  },
  {
    id: 'card',
    name: 'Gift Card',
    price: 4.99,
    imageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0',
  },
] as const;
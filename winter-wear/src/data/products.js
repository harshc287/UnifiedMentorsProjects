// Sample winter clothing catalog
// Images are hotlinked from Unsplash placeholders

const products = [
  {
    id: 'w01',
    name: 'Arctic Down Parka',
    category: 'Jackets',
    price: 249.99,
    description:
      'Ultra-warm down parka with waterproof shell and detachable faux fur hood.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    image:
      'https://images.unsplash.com/photo-1548883354-7622d3ecb4f5?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'w02',
    name: 'Merino Wool Sweater',
    category: 'Sweaters',
    price: 89.0,
    description:
      'Classic crewneck sweater knit from 100% extra-fine merino wool.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Burgundy', 'Forest'],
    image:
      'https://images.unsplash.com/photo-1602810318383-9b3463c3eb05?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'w03',
    name: 'Thermal Base Layer',
    category: 'Base Layers',
    price: 39.5,
    description:
      'Moisture-wicking thermal top for extra insulation under outerwear.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    image:
      'https://images.unsplash.com/photo-1603575462950-8b378c18a0b4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'w04',
    name: 'Insulated Snow Boots',
    category: 'Boots',
    price: 159.99,
    description:
      'Rugged waterproof boots with 200g insulation and grippy outsole.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Brown', 'Black'],
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'w05',
    name: 'Knit Beanie',
    category: 'Hats',
    price: 24.0,
    description:
      'Soft ribbed knit beanie with a fold-over cuff for extra warmth.',
    sizes: ['One Size'],
    colors: ['Grey', 'Navy', 'Olive'],
    image:
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'w06',
    name: 'Cashmere Scarf',
    category: 'Scarves',
    price: 129.0,
    description:
      'Luxuriously soft cashmere scarf with fringe detailing.',
    sizes: ['One Size'],
    colors: ['Camel', 'Grey', 'Red'],
    image:
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'w07',
    name: 'Shearling-Lined Gloves',
    category: 'Gloves',
    price: 69.0,
    description:
      'Supple leather gloves with plush shearling lining.',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Cognac'],
    image:
      'https://images.unsplash.com/photo-1544551763-7ef42064d09a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'w08',
    name: 'Fleece-Lined Leggings',
    category: 'Pants',
    price: 49.0,
    description:
      'High-rise leggings with cozy brushed interior for cold days.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    image:
      'https://images.unsplash.com/photo-1556715378-4133c1be5bc0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'w09',
    name: 'Quilted Puffer Jacket',
    category: 'Jackets',
    price: 179.99,
    description:
      'Lightweight yet warm puffer with recycled insulation.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Olive', 'Black'],
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'w10',
    name: 'Chunky Cable Knit',
    category: 'Sweaters',
    price: 99.0,
    description:
      'Cozy cable knit sweater with relaxed fit and rib trims.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Rust'],
    image:
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'w11',
    name: 'Thermo Wool Socks (3-Pack)',
    category: 'Socks',
    price: 29.0,
    description:
      'Cushioned crew socks knit from a warm wool blend.',
    sizes: ['S', 'M', 'L'],
    colors: ['Heather Grey'],
    image:
      'https://images.unsplash.com/photo-1584308384149-4c7329ce1cf2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'w12',
    name: 'Storm Shell Jacket',
    category: 'Jackets',
    price: 219.0,
    description:
      'Breathable waterproof shell ideal for layering in wet snow.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black'],
    image:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200&auto=format&fit=crop',
  },
]

export default products

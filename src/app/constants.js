// Categories Data
export const categories = [
  { key: '1', label: 'Polo Shirts' },
  { key: '2', label: 'Cotton Pants' },
  { key: '3', label: 'Dri-fit Shirts ' },
  { key: '4', label: 'Crew Neck Shirts' },
  { key: '5', label: 'Trousers' },
  { key: '6', label: 'Track Suits' },
  { key: '7', label: 'Denim Jeans' },
];
// Card Data
export const cardData = [
  {
    id: 1,
    image: 'https://picsum.photos/800/500?random=1',
    description: 'Product 1',
    price: '1000',
  },
  {
    id: 2,
    image: 'https://picsum.photos/800/500?random=2',
    description: 'Product 2',
    price: '2000',
  },
  {
    id: 3,
    image: 'https://picsum.photos/800/500?random=3',
    description: 'Product 3',
    price: '3000',
  },
  {
    id: 4,
    image: 'https://picsum.photos/800/500?random=4',
    description: 'Product 4',
    price: '4000',
  },
];

// Album Data
export const items = [
  {
    title: 'Polo Shirts',
    image: 'https://picsum.photos/800/500?random=1',
  },
  {
    title: 'Dri-Fits',
    image: 'https://picsum.photos/800/500?random=2',
  },
  {
    title: 'Track Suits',
    image: 'https://picsum.photos/800/500?random=3',
  },
  {
    title: 'Chinos Pants',
    image: 'https://picsum.photos/800/500?random=1',
  },
];

// Accordion Data
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const getItems = (panelStyle) => [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

// Review Data
export const reviews = [
  {
    id: 1,
    title: 'Comfortable ',
    description: 'Nice',
    reviewer: 'Ali Malik',
    rating: 5,
  },
  {
    id: 2,
    title: 'Perfect Pants',
    description: 'Value for money',
    reviewer: 'Ali H.',
    rating: 5,
  },
  {
    id: 3,
    title: 'Value for Money',
    description: 'Great Quality',
    reviewer: 'Abbas Ahmad',
    rating: 5,
  },
  {
    id: 4,
    title: 'Great Quality',
    description: 'Great Quality',
    reviewer: ' Ahmad khan',
    rating: 5,
  },
];

// tabs Data
export const tabreviews = [
  {
    id: 1,
    rating: 5,
    title: 'Beautiful Color',
    content: 'Beautiful Color my Fav...Quality was zabardast',
    date: '04/24/2024',
    author: 'Demo',
  },
  {
    id: 2,
    rating: 5,
    title: 'Pure DriFit Material',
    content:
      'effectively manage moisture and keep me feeling fresh and comfortable, even during the most intense workouts.',
    date: '04/24/2024',
    author: 'SomeOne',
  },
];

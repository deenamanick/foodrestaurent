import { useCart } from '../context/CartContext';
import MenuItem from '../components/MenuItem';

const dummyMenu = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic cheese and tomato pizza with basil',
    price: 9.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0HbRY0SsECXq3XHqjXUBw3CqK1VfE5PX1w&s',
  },
  {
    id: 2,
    name: 'Chicken Burger',
    description: 'Grilled chicken patty with lettuce and mayo',
    price: 7.49,
    image: 'https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg',
  },
  {
    id: 3,
    name: 'Veggie Pasta',
    description: 'Pasta with fresh veggies and tomato sauce',
    price: 8.25,
    image: 'https://www.budgetbytes.com/wp-content/uploads/2021/10/One-Pot-Veggie-Pasta-bowl-500x500.jpg',
  },
  {
    id: 4,
    name: 'Caesar Salad',
    description: 'Crisp romaine with Caesar dressing and croutons',
    price: 6.00,
    image: 'https://www.foodandwine.com/thmb/6tkb93bjPBo71eHzLCbL-7jE0Xc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Caesar-Salad-w-Shrimp-FT-RECIPE0424-9b30a77ba2144a079db49c9eefd24976.jpg',
  },
  {
    id: 5,
    name: 'Margherita Pizza',
    description: 'Classic cheese and tomato pizza with basil',
    price: 9.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0HbRY0SsECXq3XHqjXUBw3CqK1VfE5PX1w&s',
  },
  {
    id: 6,
    name: 'Chicken Burger',
    description: 'Grilled chicken patty with lettuce and mayo',
    price: 7.49,
    image: 'https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg',
  },
  {
    id: 7,
    name: 'Veggie Pasta',
    description: 'Pasta with fresh veggies and tomato sauce',
    price: 8.25,
    image: 'https://www.budgetbytes.com/wp-content/uploads/2021/10/One-Pot-Veggie-Pasta-bowl-500x500.jpg',
  },
  {
    id: 8,
    name: 'Caesar Salad',
    description: 'Crisp romaine with Caesar dressing and croutons',
    price: 6.00,
    image: 'https://www.foodandwine.com/thmb/6tkb93bjPBo71eHzLCbL-7jE0Xc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Caesar-Salad-w-Shrimp-FT-RECIPE0424-9b30a77ba2144a079db49c9eefd24976.jpg',
  },
];

export default function MenuPage() {
  const { addToCart } = useCart(); // 🛒 Access the context function

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dummyMenu.map(item => (
          <MenuItem key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

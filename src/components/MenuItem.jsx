export default function MenuItem({ item, onAddToCart }) {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-xl mb-4 shadow-sm"
      />
      <h3 className="text-xl font-bold text-gray-800 tracking-tight mb-1">
        {item.name}
      </h3>
      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
        {item.description}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-xl text-red-500 font-extrabold">${item.price}</span>
        <button
          onClick={() => onAddToCart(item)}
          className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

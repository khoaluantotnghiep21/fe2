import React from 'react';
interface ProductCardProps {
  imageUrl: string;
  discount?: string;
  title: string;
  options: string[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
  price: string;
  originalPrice: string;
  subText: string;
  buttonText: string;
  onButtonClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  discount,
  title,
  options,
  selectedOption,
  onOptionChange,
  price,
  originalPrice,
  subText,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="w-80 mx-auto bg-white rounded-xl shadow-lg p-4 font-sans">
      {discount && (
        <div className="absolute -top-3 -left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          {discount}
        </div>
      )}

      <div className="flex justify-center mb-4">
        <img src={imageUrl} alt="Product" className="w-48 h-auto" />
      </div>

      <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
        {title}
      </h2>

      <div className="flex justify-center space-x-2 mb-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onOptionChange(option)}
            className={`px-4 py-1 border rounded-md text-sm font-medium ${
              selectedOption === option
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-white text-gray-700 border-gray-300'
            } hover:bg-blue-100 transition`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="text-center mb-4">
        <p className="text-xl font-bold text-red-500">{price}</p>
        <p className="text-sm text-gray-500 line-through">{originalPrice}</p>
        <p className="text-xs text-gray-600 mt-1">{subText}</p>
      </div>

      <button
        onClick={onButtonClick}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ProductCard;
'use client'
import React from 'react';
import Image from 'next/image';

const Products = () => {
  const products = [
    { id: 1, name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', image: '/assets/Trenton_modular_sofa_31.png' },
    { id: 2, name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', image: '/assets/Mask_group_(1).png' },
    { id: 3, name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', image: '/assets/Mask_group_(2).png' },
    { id: 4, name: 'Plain console with teak mirror', price: 'Rs. 25,000.00', image: '/assets/Mask_group_(3).png' },
    { id: 5, name: 'Grain coffee table', price: 'Rs. 15,000.00', image: '/assets/Grain_coffee_table_1_(1).png' },
    { id: 6, name: 'Kent coffee table', price: 'Rs. 225,000.00', image: '/assets/Kent_coffee_table_1.png' },
    { id: 7, name: 'Round coffee table_color 2', price: 'Rs. 251,000.00', image: '/assets/Round_coffee_table_color_21.png' },
    { id: 8, name: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00', image: '/assets/Reclaimed_teak_coffeetable_1.png' },
    { id: 9, name: 'plain console_', price: 'Rs. 258,200.00', image: '/assets/Mask_group_(4).png' },
    { id: 10, name: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00', image: '/assets/Reclaimed_teak_Sideboard_1.png'}, 
    { id: 11, name: 'SJP_0825', price: 'Rs. 200,000.00', image: '/assets/SJP_0825_1.png' },
    { id: 12, name: 'Bella chair and Table', price: 'Rs. 100,000.00', image: '/assets/Bella_chair_and_table_1.png' },
    { id: 13, name: 'Granite square side table', price: 'Rs. 258,800.00', image: '/assets/Granite_square_side_table_1.png' },
    { id: 14, name: 'Asgaard sofa', price: 'Rs. 250,000.00', image: '/assets/Asgaard_sofa_1.png' },
    { id: 15, name: 'Maya sofa three seater', price: 'Rs. 115,000.00', image: '/assets/Mask_group_(5).png' },
    { id: 16, name: 'Outdoor sofa set', price: 'Rs. 244,000.00', image: '/assets/Outdoor_sofa_set_1.png' },
  ];

  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="mt-2 text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

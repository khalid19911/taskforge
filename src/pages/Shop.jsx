import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { supabase } from "../../supabaseClient";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVariants = async () => {
      setLoading(true);

      // Fetch all variants with product info and images
      const { data, error } = await supabase.from("variants").select(`
        id,
        product_id,
        color,
        size,
        stock,
        price,
        products (
          name,
          product_images (
            image_url,
            color
          )
        )
      `);

      if (error) {
        console.error("Error fetching variants:", error);
        setLoading(false);
        return;
      }

      // Group by product_id + color
      const grouped = data.reduce((acc, variant) => {
        const key = `${variant.product_id}-${variant.color}`;
        if (!acc[key]) {
          acc[key] = {
            id: variant.id, // pick first variant for routing
            product_id: variant.product_id,
            name: variant.products.name,
            color: variant.color,
            price: variant.price,
            images: variant.products.product_images
              .filter((img) => img.color === variant.color)
              .map((img) => img.image_url),
            inventory: {},
          };
        }
        acc[key].inventory[variant.size] = variant.stock;
        return acc;
      }, {});

      setProducts(Object.values(grouped));
      setLoading(false);
    };

    fetchVariants();
  }, []);

  if (loading)
    return <p className="text-white text-center mt-20">Loading...</p>;

  return (
    <div className="bg-black text-white py-16 px-5">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 mt-10 px-5">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-center md:text-left">
          PRODUCTS
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mt-2 rounded mx-auto"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { supabase } from "../../supabaseClient";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      setLoading(true);

      // Fetch all variants with product info and images
      const { data, error } = await supabase.from("variants").select(`
          id,
          product_id,
          color,
          size,
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

      // Remove duplicates by product_id + color
      const uniqueVariants = [];
      const seen = new Set();
      data.forEach((variant) => {
        const key = `${variant.product_id}-${variant.color}`;
        if (!seen.has(key)) {
          seen.add(key);
          // Pick images that match this variant's color
          const images = variant.products.product_images
            .filter((img) => img.color === variant.color)
            .map((img) => img.image_url);

          uniqueVariants.push({
            id: variant.id,
            name: variant.products.name,
            color: variant.color,
            price: variant.price,
            images,
          });
        }
      });

      // Pick 4 random variants
      const shuffled = uniqueVariants.sort(() => 0.5 - Math.random());
      setProducts(shuffled.slice(0, 4));

      setLoading(false);
    };

    fetchFeaturedProducts();
  }, []);

  if (loading)
    return <p className="text-white text-center mt-20">Loading...</p>;

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-10 flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

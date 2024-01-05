import React from "react";
import productsData from "../data/productsData";
import Banner from "../component/Banner";
import { useParams } from "react-router-dom";
import Layout from "../component/Layout";

function ProductDetail() {
  const { id } = useParams(); // Get the id from URL parameters
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found!</div>;
  }
  return <Layout>
    <Banner bannerTxt="Product Detail" />
  </Layout>; 
}

export default ProductDetail;

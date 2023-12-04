import Layout from "@/components/Layout";

import { useState } from "react";

export default function NewProduct() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  function createProduct() {};

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>
        <label>Product name</label>
        <input
          type="text"
          placeholder="product name"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <label>Description</label>
        <textarea
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        ></textarea>
        <label value={price} onChange={(ev) => setPrice(ev.target.value)}>
          Price (in USD)
        </label>
        <textarea type="number" placeholder="price"></textarea>
      </form>
      <button type="submit" className="btn-primary">
        Save
      </button>
    </Layout>
  );
}

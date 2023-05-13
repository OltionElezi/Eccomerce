import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function createProduct(event) {
    event.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/products", data);
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>
        <label>Product name</label>
        <input
          type="text"
          placeholder="product name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Description</label>
        <textarea
          placeholder="description for product..."
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <label>Price (Euro)</label>
        <input
          type="number"
          placeholder="price in euro"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <button className="btn-primary" type="submit">
          Save
        </button>
      </form>
    </Layout>
  );
}

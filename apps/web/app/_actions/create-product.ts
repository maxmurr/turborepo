"use server";

export async function createProduct(formData: FormData) {
  await fetch(`${process.env.API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      price: Number(formData.get("price")),
    }),
  });
}

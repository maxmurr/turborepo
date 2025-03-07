import { CreateProductForm } from "./_components/create-product-form";
import { Suspense } from "react";
import { ProductsTableSkeleton } from "./_components/products-table-skeleton";
import { ProductsTable } from "./_components/products-table";
import { Product } from "@repo/types";

export const dynamic = "force-dynamic";

async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/products`, {
      next: { tags: ["products"] },
    });

    if (!response.ok) throw new Error("Failed to fetch products");

    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export default function Page() {
  return (
    <div className="container max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Product</h1>
      <CreateProductForm />
      <div className="container py-8">
        <Suspense fallback={<ProductsTableSkeleton />}>
          <ProductsTable getProducts={getProducts} />
        </Suspense>
      </div>
    </div>
  );
}

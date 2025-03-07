import { Button } from "@/components/ui/button";
import { createProduct } from "../_actions/create-product";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateProductForm() {
  return (
    <form action={createProduct} className="space-y-6">
      <Label>Product Name</Label>
      <Input name="name" placeholder="Enter product name" />
      <Label>Price</Label>
      <Input name="price" type="number" step="0.01" placeholder="0.00" />
      <Button type="submit" className="flex-1">
        Create Product
      </Button>
    </form>
  );
}

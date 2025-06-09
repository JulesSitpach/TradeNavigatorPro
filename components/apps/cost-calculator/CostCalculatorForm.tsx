"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product, CostCalculation } from "@/lib/types";
import {
  COUNTRIES,
  SHIPPING_METHODS,
  PRODUCT_CATEGORIES,
} from "@/lib/constants";
import {
  generateCostCalculation,
  calculateBulkProducts,
} from "@/lib/calculations/tariff-calculator";
import { Plus, Minus, Calculator } from "lucide-react";

interface CostCalculatorFormProps {
  onCalculationComplete: (calculations: CostCalculation[]) => void;
  isCalculating: boolean;
}

export function CostCalculatorForm({
  onCalculationComplete,
  isCalculating,
}: CostCalculatorFormProps) {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "",
      htsCode: "",
      description: "",
      unitCost: 0,
      quantity: 0,
      weight: 0,
      supplierCountry: "",
      category: "",
    },
  ]);
  const [shippingMethod, setShippingMethod] = useState<"air" | "sea" | "land">(
    "sea",
  );
  const [additionalFees, setAdditionalFees] = useState(0);

  const addProduct = () => {
    const newProduct: Product = {
      id: Date.now().toString(),
      name: "",
      htsCode: "",
      description: "",
      unitCost: 0,
      quantity: 0,
      weight: 0,
      supplierCountry: "",
      category: "",
    };
    setProducts([...products, newProduct]);
  };

  const removeProduct = (id: string) => {
    if (products.length > 1) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const updateProduct = (id: string, field: keyof Product, value: any) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    );
  };

  const handleCalculate = () => {
    const validProducts = products.filter(
      (p) => p.name && p.unitCost > 0 && p.quantity > 0 && p.supplierCountry,
    );

    if (validProducts.length === 0) {
      alert("Please fill in at least one complete product");
      return;
    }

    const { calculations } = calculateBulkProducts(validProducts, {
      shippingMethod,
      additionalFees,
    });

    onCalculationComplete(calculations);
  };

  const isFormValid = products.some(
    (p) => p.name && p.unitCost > 0 && p.quantity > 0 && p.supplierCountry,
  );

  return (
    <div className="space-y-6" data-oid="am6i43z">
      {/* Products */}
      <div className="space-y-4" data-oid="ibmyt0-">
        <div className="flex items-center justify-between" data-oid="x2.qb6z">
          <h3 className="text-lg font-semibold" data-oid="ql:y0-u">
            Products
          </h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addProduct}
            className="flex items-center space-x-2"
            data-oid="94ukio8"
          >
            <Plus className="h-4 w-4" data-oid=".lawqlv" />
            <span data-oid="4tsttck">Add Product</span>
          </Button>
        </div>

        {products.map((product, index) => (
          <Card key={product.id} className="relative" data-oid="f:4ms8m">
            <CardHeader className="pb-4" data-oid=":q3g3s2">
              <div
                className="flex items-center justify-between"
                data-oid="ti-ar4j"
              >
                <CardTitle className="text-base" data-oid="fbp8xo_">
                  Product {index + 1}
                </CardTitle>
                {products.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeProduct(product.id)}
                    className="text-destructive hover:text-destructive"
                    data-oid="74h1i14"
                  >
                    <Minus className="h-4 w-4" data-oid="jn6bcy9" />
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="d6q22l0">
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                data-oid="oxegpjx"
              >
                <div data-oid="utrk1x1">
                  <Label htmlFor={`name-${product.id}`} data-oid="iy3bw_f">
                    Product Name *
                  </Label>
                  <Input
                    id={`name-${product.id}`}
                    value={product.name}
                    onChange={(e) =>
                      updateProduct(product.id, "name", e.target.value)
                    }
                    placeholder="e.g., Wireless Headphones"
                    data-oid="1-epo0v"
                  />
                </div>
                <div data-oid="m6nohnc">
                  <Label htmlFor={`hts-${product.id}`} data-oid="u-iz9hy">
                    HTS Code
                  </Label>
                  <Input
                    id={`hts-${product.id}`}
                    value={product.htsCode}
                    onChange={(e) =>
                      updateProduct(product.id, "htsCode", e.target.value)
                    }
                    placeholder="e.g., 8518300000"
                    data-oid="llh2w:v"
                  />
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                data-oid="_-:h68:"
              >
                <div data-oid="g3blvz1">
                  <Label htmlFor={`cost-${product.id}`} data-oid="zaz4re.">
                    Unit Cost (USD) *
                  </Label>
                  <Input
                    id={`cost-${product.id}`}
                    type="number"
                    step="0.01"
                    min="0"
                    value={product.unitCost || ""}
                    onChange={(e) =>
                      updateProduct(
                        product.id,
                        "unitCost",
                        parseFloat(e.target.value) || 0,
                      )
                    }
                    placeholder="0.00"
                    data-oid="0khw6-e"
                  />
                </div>
                <div data-oid="3-dwufn">
                  <Label htmlFor={`quantity-${product.id}`} data-oid="zll7awu">
                    Quantity *
                  </Label>
                  <Input
                    id={`quantity-${product.id}`}
                    type="number"
                    min="1"
                    value={product.quantity || ""}
                    onChange={(e) =>
                      updateProduct(
                        product.id,
                        "quantity",
                        parseInt(e.target.value) || 0,
                      )
                    }
                    placeholder="0"
                    data-oid="f3x:h44"
                  />
                </div>
                <div data-oid="res0v5q">
                  <Label htmlFor={`weight-${product.id}`} data-oid="_vax690">
                    Weight (kg)
                  </Label>
                  <Input
                    id={`weight-${product.id}`}
                    type="number"
                    step="0.1"
                    min="0"
                    value={product.weight || ""}
                    onChange={(e) =>
                      updateProduct(
                        product.id,
                        "weight",
                        parseFloat(e.target.value) || 0,
                      )
                    }
                    placeholder="0.0"
                    data-oid="t00pnnp"
                  />
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                data-oid="pb_k0xs"
              >
                <div data-oid="z7ywq4z">
                  <Label htmlFor={`country-${product.id}`} data-oid="047ynp3">
                    Supplier Country *
                  </Label>
                  <Select
                    value={product.supplierCountry}
                    onValueChange={(value) =>
                      updateProduct(product.id, "supplierCountry", value)
                    }
                    data-oid="9noi79e"
                  >
                    <SelectTrigger data-oid=":svsm4c">
                      <SelectValue
                        placeholder="Select country"
                        data-oid="gh4p5hd"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="dqw01v0">
                      {COUNTRIES.map((country) => (
                        <SelectItem
                          key={country.code}
                          value={country.code}
                          data-oid="bw.s.vt"
                        >
                          {country.flag} {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div data-oid="khbdpxq">
                  <Label htmlFor={`category-${product.id}`} data-oid="-6hde9d">
                    Category
                  </Label>
                  <Select
                    value={product.category}
                    onValueChange={(value) =>
                      updateProduct(product.id, "category", value)
                    }
                    data-oid=":kgyab1"
                  >
                    <SelectTrigger data-oid="5mzibk:">
                      <SelectValue
                        placeholder="Select category"
                        data-oid="_su:84:"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="xzbez8p">
                      {PRODUCT_CATEGORIES.map((category) => (
                        <SelectItem
                          key={category}
                          value={category}
                          data-oid="kh_jjz7"
                        >
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div data-oid="e:nb25v">
                <Label htmlFor={`description-${product.id}`} data-oid="3ep2f::">
                  Description
                </Label>
                <Input
                  id={`description-${product.id}`}
                  value={product.description}
                  onChange={(e) =>
                    updateProduct(product.id, "description", e.target.value)
                  }
                  placeholder="Optional product description"
                  data-oid="zfnwiya"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Shipping Options */}
      <Card data-oid="-93_s76">
        <CardHeader data-oid="yc8mt2m">
          <CardTitle className="text-base" data-oid="y0u1q1u">
            Shipping & Additional Costs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4" data-oid="gngkgtp">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            data-oid="gvl1rbq"
          >
            <div data-oid="657e9sg">
              <Label htmlFor="shipping-method" data-oid="28-80ix">
                Shipping Method
              </Label>
              <Select
                value={shippingMethod}
                onValueChange={(value: "air" | "sea" | "land") =>
                  setShippingMethod(value)
                }
                data-oid=".feqp4:"
              >
                <SelectTrigger data-oid="2fm6pp6">
                  <SelectValue data-oid="5fw5pwx" />
                </SelectTrigger>
                <SelectContent data-oid="jonwd-k">
                  {SHIPPING_METHODS.map((method) => (
                    <SelectItem
                      key={method.value}
                      value={method.value}
                      data-oid=".o3zyqj"
                    >
                      <div
                        className="flex items-center justify-between w-full"
                        data-oid="c-6w0fc"
                      >
                        <span data-oid="9b-8kic">{method.label}</span>
                        <Badge
                          variant="secondary"
                          className="ml-2"
                          data-oid="41pac35"
                        >
                          {method.estimatedDays}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div data-oid="hwe-wxo">
              <Label htmlFor="additional-fees" data-oid="o04dts_">
                Additional Fees (USD)
              </Label>
              <Input
                id="additional-fees"
                type="number"
                step="0.01"
                min="0"
                value={additionalFees || ""}
                onChange={(e) =>
                  setAdditionalFees(parseFloat(e.target.value) || 0)
                }
                placeholder="0.00"
                data-oid="tx8mmsy"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calculate Button */}
      <Button
        onClick={handleCalculate}
        disabled={!isFormValid || isCalculating}
        className="w-full btn-orange"
        size="lg"
        data-oid="qc4paby"
      >
        {isCalculating ? (
          <>
            <div
              className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
              data-oid="yrkpsxm"
            />
            Calculating...
          </>
        ) : (
          <>
            <Calculator className="h-4 w-4 mr-2" data-oid="kfgn79l" />
            Calculate Landed Costs
          </>
        )}
      </Button>
    </div>
  );
}

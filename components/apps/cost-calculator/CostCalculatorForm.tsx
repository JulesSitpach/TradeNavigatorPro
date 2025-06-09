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
    <div className="space-y-6" data-oid="be2kw8h">
      {/* Products */}
      <div className="space-y-4" data-oid="3jp1wk4">
        <div className="flex items-center justify-between" data-oid="skhze-s">
          <h3 className="text-lg font-semibold" data-oid="hkuv3q2">
            Products
          </h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addProduct}
            className="flex items-center space-x-2"
            data-oid="nktvxdw"
          >
            <Plus className="h-4 w-4" data-oid="bbvjb1v" />
            <span data-oid="aw359lt">Add Product</span>
          </Button>
        </div>

        {products.map((product, index) => (
          <Card key={product.id} className="relative" data-oid="lz49svh">
            <CardHeader className="pb-4" data-oid="n-la_qb">
              <div
                className="flex items-center justify-between"
                data-oid="80q:wzv"
              >
                <CardTitle className="text-base" data-oid="37-l614">
                  Product {index + 1}
                </CardTitle>
                {products.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeProduct(product.id)}
                    className="text-destructive hover:text-destructive"
                    data-oid="e86yc9:"
                  >
                    <Minus className="h-4 w-4" data-oid="1406q9i" />
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="7y2irve">
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                data-oid="imyvksp"
              >
                <div data-oid="ytmy2.i">
                  <Label htmlFor={`name-${product.id}`} data-oid="ckr.ijv">
                    Product Name *
                  </Label>
                  <Input
                    id={`name-${product.id}`}
                    value={product.name}
                    onChange={(e) =>
                      updateProduct(product.id, "name", e.target.value)
                    }
                    placeholder="e.g., Wireless Headphones"
                    data-oid="q7:redg"
                  />
                </div>
                <div data-oid="a-n8sls">
                  <Label htmlFor={`hts-${product.id}`} data-oid="odancr-">
                    HTS Code
                  </Label>
                  <Input
                    id={`hts-${product.id}`}
                    value={product.htsCode}
                    onChange={(e) =>
                      updateProduct(product.id, "htsCode", e.target.value)
                    }
                    placeholder="e.g., 8518300000"
                    data-oid="uko48r_"
                  />
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                data-oid="nb5iohh"
              >
                <div data-oid="qh1t2pd">
                  <Label htmlFor={`cost-${product.id}`} data-oid="_dc8gzm">
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
                    data-oid="dajw5e6"
                  />
                </div>
                <div data-oid=":t-zek6">
                  <Label htmlFor={`quantity-${product.id}`} data-oid="s9xron8">
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
                    data-oid="1bwtcag"
                  />
                </div>
                <div data-oid="qlv7e--">
                  <Label htmlFor={`weight-${product.id}`} data-oid="bgu2spn">
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
                    data-oid="u:nkdla"
                  />
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                data-oid="f2vej6f"
              >
                <div data-oid=".q0ips3">
                  <Label htmlFor={`country-${product.id}`} data-oid="nnp_nil">
                    Supplier Country *
                  </Label>
                  <Select
                    value={product.supplierCountry}
                    onValueChange={(value) =>
                      updateProduct(product.id, "supplierCountry", value)
                    }
                    data-oid="o9or9ww"
                  >
                    <SelectTrigger data-oid=".yj2d:_">
                      <SelectValue
                        placeholder="Select country"
                        data-oid="hpk-x_6"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="wukn3_v">
                      {COUNTRIES.map((country) => (
                        <SelectItem
                          key={country.code}
                          value={country.code}
                          data-oid="axy0im9"
                        >
                          {country.flag} {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div data-oid="1:3wjb0">
                  <Label htmlFor={`category-${product.id}`} data-oid="e9afoea">
                    Category
                  </Label>
                  <Select
                    value={product.category}
                    onValueChange={(value) =>
                      updateProduct(product.id, "category", value)
                    }
                    data-oid="b8f3x9n"
                  >
                    <SelectTrigger data-oid="nxjh:7y">
                      <SelectValue
                        placeholder="Select category"
                        data-oid="w3jy4ii"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="qf56y0d">
                      {PRODUCT_CATEGORIES.map((category) => (
                        <SelectItem
                          key={category}
                          value={category}
                          data-oid="g0hj.w_"
                        >
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div data-oid="z319g73">
                <Label htmlFor={`description-${product.id}`} data-oid="alawtqy">
                  Description
                </Label>
                <Input
                  id={`description-${product.id}`}
                  value={product.description}
                  onChange={(e) =>
                    updateProduct(product.id, "description", e.target.value)
                  }
                  placeholder="Optional product description"
                  data-oid="cjw.2.5"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Shipping Options */}
      <Card data-oid="9r3w6:v">
        <CardHeader data-oid="jj0dn:p">
          <CardTitle className="text-base" data-oid="v4h6tuk">
            Shipping & Additional Costs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4" data-oid="pumoogc">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            data-oid="3k0ctgu"
          >
            <div data-oid="9zdj78.">
              <Label htmlFor="shipping-method" data-oid="u_:rjaa">
                Shipping Method
              </Label>
              <Select
                value={shippingMethod}
                onValueChange={(value: "air" | "sea" | "land") =>
                  setShippingMethod(value)
                }
                data-oid="11vv_d6"
              >
                <SelectTrigger data-oid="a8q5693">
                  <SelectValue data-oid="a:03uqc" />
                </SelectTrigger>
                <SelectContent data-oid="9yb74rk">
                  {SHIPPING_METHODS.map((method) => (
                    <SelectItem
                      key={method.value}
                      value={method.value}
                      data-oid="ba3tqi8"
                    >
                      <div
                        className="flex items-center justify-between w-full"
                        data-oid="s:g7z4e"
                      >
                        <span data-oid="hsti-xa">{method.label}</span>
                        <Badge
                          variant="secondary"
                          className="ml-2"
                          data-oid="5cfe-.c"
                        >
                          {method.estimatedDays}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div data-oid="gc.oj68">
              <Label htmlFor="additional-fees" data-oid="mj6sq3-">
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
                data-oid=":0ik96i"
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
        data-oid="q2d2tk."
      >
        {isCalculating ? (
          <>
            <div
              className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
              data-oid="ioa00z9"
            />
            Calculating...
          </>
        ) : (
          <>
            <Calculator className="h-4 w-4 mr-2" data-oid="ues-y:b" />
            Calculate Landed Costs
          </>
        )}
      </Button>
    </div>
  );
}

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
    <div className="space-y-6" data-oid="5x891ru">
      {/* Products */}
      <div className="space-y-4" data-oid="25oimmu">
        <div className="flex items-center justify-between" data-oid="sit-1x-">
          <h3 className="text-lg font-semibold" data-oid="o7y_y16">
            Products
          </h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addProduct}
            className="flex items-center space-x-2"
            data-oid="s_rrna6"
          >
            <Plus className="h-4 w-4" data-oid="yz-tp_o" />
            <span data-oid="e:sfr5r">Add Product</span>
          </Button>
        </div>

        {products.map((product, index) => (
          <Card key={product.id} className="relative" data-oid="ju7w_l0">
            <CardHeader className="pb-4" data-oid=".09cwic">
              <div
                className="flex items-center justify-between"
                data-oid="-jkg5xy"
              >
                <CardTitle className="text-base" data-oid="be.n9sh">
                  Product {index + 1}
                </CardTitle>
                {products.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeProduct(product.id)}
                    className="text-destructive hover:text-destructive"
                    data-oid="86sxru5"
                  >
                    <Minus className="h-4 w-4" data-oid="2ml..ah" />
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="ve5z21c">
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                data-oid="nl_op11"
              >
                <div data-oid="toxwdlk">
                  <Label htmlFor={`name-${product.id}`} data-oid="3mnn.-0">
                    Product Name *
                  </Label>
                  <Input
                    id={`name-${product.id}`}
                    value={product.name}
                    onChange={(e) =>
                      updateProduct(product.id, "name", e.target.value)
                    }
                    placeholder="e.g., Wireless Headphones"
                    data-oid="hy3rzk3"
                  />
                </div>
                <div data-oid="ye8oryk">
                  <Label htmlFor={`hts-${product.id}`} data-oid="yb40ji-">
                    HTS Code
                  </Label>
                  <Input
                    id={`hts-${product.id}`}
                    value={product.htsCode}
                    onChange={(e) =>
                      updateProduct(product.id, "htsCode", e.target.value)
                    }
                    placeholder="e.g., 8518300000"
                    data-oid="auoztml"
                  />
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                data-oid=".c8-2q_"
              >
                <div data-oid="yfyxsnk">
                  <Label htmlFor={`cost-${product.id}`} data-oid="wc4_chc">
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
                    data-oid="q.d.sev"
                  />
                </div>
                <div data-oid="i.3s::1">
                  <Label htmlFor={`quantity-${product.id}`} data-oid=":7gosa:">
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
                    data-oid="w9zow7z"
                  />
                </div>
                <div data-oid="nt0c3df">
                  <Label htmlFor={`weight-${product.id}`} data-oid="9ou8xai">
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
                    data-oid="pf0a85z"
                  />
                </div>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                data-oid="0of_v57"
              >
                <div data-oid="vw0ewf7">
                  <Label htmlFor={`country-${product.id}`} data-oid="fow.gsf">
                    Supplier Country *
                  </Label>
                  <Select
                    value={product.supplierCountry}
                    onValueChange={(value) =>
                      updateProduct(product.id, "supplierCountry", value)
                    }
                    data-oid="6_:p4gb"
                  >
                    <SelectTrigger data-oid="m5-:sf8">
                      <SelectValue
                        placeholder="Select country"
                        data-oid="utn91m4"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="4qdq3:u">
                      {COUNTRIES.map((country) => (
                        <SelectItem
                          key={country.code}
                          value={country.code}
                          data-oid="83hz:n3"
                        >
                          {country.flag} {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div data-oid="2-5a:uw">
                  <Label htmlFor={`category-${product.id}`} data-oid="i5.sr1s">
                    Category
                  </Label>
                  <Select
                    value={product.category}
                    onValueChange={(value) =>
                      updateProduct(product.id, "category", value)
                    }
                    data-oid=":qzsq27"
                  >
                    <SelectTrigger data-oid="ltpbzn-">
                      <SelectValue
                        placeholder="Select category"
                        data-oid="kr.hb4i"
                      />
                    </SelectTrigger>
                    <SelectContent data-oid="1.:mm0e">
                      {PRODUCT_CATEGORIES.map((category) => (
                        <SelectItem
                          key={category}
                          value={category}
                          data-oid="-_s4i.n"
                        >
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div data-oid="xw6w5.1">
                <Label htmlFor={`description-${product.id}`} data-oid="_h1e.l6">
                  Description
                </Label>
                <Input
                  id={`description-${product.id}`}
                  value={product.description}
                  onChange={(e) =>
                    updateProduct(product.id, "description", e.target.value)
                  }
                  placeholder="Optional product description"
                  data-oid="oumj9pp"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Shipping Options */}
      <Card data-oid="6vtlsr9">
        <CardHeader data-oid="9c4b875">
          <CardTitle className="text-base" data-oid="ew5l_xp">
            Shipping & Additional Costs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4" data-oid=".o1qf5b">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            data-oid="989bcas"
          >
            <div data-oid="t.6h4.l">
              <Label htmlFor="shipping-method" data-oid="-atn4de">
                Shipping Method
              </Label>
              <Select
                value={shippingMethod}
                onValueChange={(value: "air" | "sea" | "land") =>
                  setShippingMethod(value)
                }
                data-oid="cx66i1:"
              >
                <SelectTrigger data-oid="m4xvx7k">
                  <SelectValue data-oid="71:o_5l" />
                </SelectTrigger>
                <SelectContent data-oid="f6n2az4">
                  {SHIPPING_METHODS.map((method) => (
                    <SelectItem
                      key={method.value}
                      value={method.value}
                      data-oid="nz739j4"
                    >
                      <div
                        className="flex items-center justify-between w-full"
                        data-oid="spiu5c3"
                      >
                        <span data-oid=".40r.:h">{method.label}</span>
                        <Badge
                          variant="secondary"
                          className="ml-2"
                          data-oid="hzkrpe_"
                        >
                          {method.estimatedDays}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div data-oid=":wkcz5l">
              <Label htmlFor="additional-fees" data-oid=":4sxmsn">
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
                data-oid="y009_p_"
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
        data-oid="d0g-:_c"
      >
        {isCalculating ? (
          <>
            <div
              className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
              data-oid="prqus09"
            />
            Calculating...
          </>
        ) : (
          <>
            <Calculator className="h-4 w-4 mr-2" data-oid="4ip_wui" />
            Calculate Landed Costs
          </>
        )}
      </Button>
    </div>
  );
}

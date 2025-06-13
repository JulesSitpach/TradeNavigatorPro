import { AlternativeSupplier } from "../types";

export const sampleSuppliers: AlternativeSupplier[] = [
  {
    id: "1",
    name: "TechSource Manufacturing",
    country: "TW",
    contactEmail: "sales@techsource.tw",
    contactPhone: "+886-2-1234-5678",
    website: "www.techsource.tw",
    certifications: ["ISO 9001", "CE", "FCC"],
    leadTime: 21,
    minimumOrder: 500,
    rating: 4.8,
    verified: true,
    tariffRate: 0,
    costComparison: {
      unitCost: 48.0,
      tariffCost: 0,
      shippingCost: 2.5,
      totalCost: 50.5,
      savings: -5.5,
      savingsPercentage: -12.2,
    },
  },
  {
    id: "2",
    name: "Vietnam Electronics Co.",
    country: "VN",
    contactEmail: "export@vnelectronics.vn",
    contactPhone: "+84-28-1234-5678",
    website: "www.vnelectronics.vn",
    certifications: ["ISO 9001", "CE"],
    leadTime: 28,
    minimumOrder: 1000,
    rating: 4.5,
    verified: true,
    tariffRate: 0,
    costComparison: {
      unitCost: 42.0,
      tariffCost: 0,
      shippingCost: 3.2,
      totalCost: 45.2,
      savings: 6.8,
      savingsPercentage: 13.1,
    },
  },
  {
    id: "3",
    name: "Precision Manufacturing Ltd",
    country: "MY",
    contactEmail: "info@precision.my",
    contactPhone: "+60-3-1234-5678",
    website: "www.precision.my",
    certifications: ["ISO 9001", "ISO 14001"],
    leadTime: 25,
    minimumOrder: 750,
    rating: 4.6,
    verified: true,
    tariffRate: 0,
    costComparison: {
      unitCost: 46.5,
      tariffCost: 0,
      shippingCost: 2.8,
      totalCost: 49.3,
      savings: 2.7,
      savingsPercentage: 5.2,
    },
  },
  {
    id: "4",
    name: "Thai Industrial Group",
    country: "TH",
    contactEmail: "sales@thaigroup.th",
    contactPhone: "+66-2-1234-5678",
    website: "www.thaigroup.th",
    certifications: ["ISO 9001", "OHSAS 18001"],
    leadTime: 30,
    minimumOrder: 1200,
    rating: 4.3,
    verified: true,
    tariffRate: 0,
    costComparison: {
      unitCost: 44.0,
      tariffCost: 0,
      shippingCost: 3.5,
      totalCost: 47.5,
      savings: 4.5,
      savingsPercentage: 8.7,
    },
  },
  {
    id: "5",
    name: "Mexico Manufacturing Solutions",
    country: "MX",
    contactEmail: "ventas@mexmfg.mx",
    contactPhone: "+52-55-1234-5678",
    website: "www.mexmfg.mx",
    certifications: ["ISO 9001", "USMCA Certified"],
    leadTime: 14,
    minimumOrder: 300,
    rating: 4.7,
    verified: true,
    tariffRate: 0,
    costComparison: {
      unitCost: 52.0,
      tariffCost: 0,
      shippingCost: 1.2,
      totalCost: 53.2,
      savings: -1.2,
      savingsPercentage: -2.3,
    },
  },
  {
    id: "6",
    name: "Indian Tech Industries",
    country: "IN",
    contactEmail: "export@indiantech.in",
    contactPhone: "+91-11-1234-5678",
    website: "www.indiantech.in",
    certifications: ["ISO 9001", "CE", "BIS"],
    leadTime: 35,
    minimumOrder: 2000,
    rating: 4.2,
    verified: false,
    tariffRate: 0,
    costComparison: {
      unitCost: 38.0,
      tariffCost: 0,
      shippingCost: 4.0,
      totalCost: 42.0,
      savings: 10.0,
      savingsPercentage: 19.2,
    },
  },
];

export const suppliersByCountry = {
  TW: sampleSuppliers.filter((s) => s.country === "TW"),
  VN: sampleSuppliers.filter((s) => s.country === "VN"),
  MY: sampleSuppliers.filter((s) => s.country === "MY"),
  TH: sampleSuppliers.filter((s) => s.country === "TH"),
  MX: sampleSuppliers.filter((s) => s.country === "MX"),
  IN: sampleSuppliers.filter((s) => s.country === "IN"),
};

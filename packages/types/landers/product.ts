export type ProductItem = {
  id: number;
  sku: string;
  name: string;
  price: number;
  status: number;
  extension_attributes: ExtensionAttributesType;
};

type ExtensionAttributesType = {
  final_price: number;
  max_qty_allowed: number;
  qty_all_store: number;
  vendor: 'solane' | 'landers';
  is_bulky: boolean;
};

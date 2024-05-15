import type { ProductItem } from './product';

type JsonType = 'widget' | 'html' | 'bannerSlider' | 'banner';

export type NewHomeResponseItem = {
  type: JsonType;
  hash?: string;
  schedule_start?: string;
  schedule_end?: string;
  start_time?: string;
  end_time?: string;
  status?: string | number;
};

export type JsonWidgetResponse = {
  type: JsonType;
  products_data: ProductItem[];
  mobile_banner_url?: string;
  banner_url?: string;
};

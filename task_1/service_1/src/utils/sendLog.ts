import axios from "axios";

export const sendLog = async (action: string, plu: number, shopId: number | null = null) => {
  try {
    await axios.post(String(process.env.LOGS_SERVICE_URL), {
      action,
      plu,
      shopId,
    });
  } catch (error) {
    console.log(error);
  }
};

export interface Log {
  shopId?: number;
  plu: number;
  action: string;
}

export const ACTIONS = {
  createProduct: "products/add",
  createStock: "stocks/add",
  increaseStock: "stocks/increase",
  decreaseStock: "stocks/decrease",
};

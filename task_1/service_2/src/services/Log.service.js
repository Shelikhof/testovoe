import db from "../db/index.js";
import toNumberOrUndefined from "../utils/toNumberOrUndefined.js";

class LogService {
  async createLog(action, plu, shopId) {
    await db.logs.create({ data: { action, plu, shopId } });
  }

  async getLogs(plu, shopId, action, from, to, page = 1, limit = 10) {
    const pluNumber = toNumberOrUndefined(plu);
    const shopIdNumber = toNumberOrUndefined(shopId);

    const fromDate = from ? new Date(from) : undefined;
    const toDate = to ? new Date(to) : undefined;

    const skip = (page - 1) * limit;

    const result = await db.logs.findMany({
      where: {
        plu: pluNumber,
        shopId: shopIdNumber,
        action: action,
        date: {
          gte: fromDate,
          lte: toDate,
        },
      },
      skip,
      take: Number(limit),
    });

    const total = await db.logs.count({
      where: {
        plu: pluNumber,
        shopId: shopIdNumber,
        action: action,
        date: {
          gte: fromDate,
          lte: toDate,
        },
      },
    });

    return { data: result, total };
  }
}

export default new LogService();

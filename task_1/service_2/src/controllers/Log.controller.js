import LogService from "../services/Log.service.js";

class LogController {
  async createLog(req, res, next) {
    try {
      await LogService.createLog(req.body.action, req.body.plu, req.body.shopId);

      res.status(200).send();
    } catch (error) {
      next(error);
    }
  }

  async getLogs(req, res, next) {
    try {
      const { plu, page, limit, shop_id, action, from, to } = req.query;

      const result = await LogService.getLogs(plu, shop_id, action, from, to, page, limit);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new LogController();

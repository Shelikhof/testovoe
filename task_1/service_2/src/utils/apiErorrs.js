class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }

  static badRequest(message) {
    return new ApiError(400, message);
  }

  static notFound() {
    return new ApiError(404, "Not found");
  }
}

export default ApiError;

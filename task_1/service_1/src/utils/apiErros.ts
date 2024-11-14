class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }

  static badRequest(message: string) {
    return new ApiError(400, message);
  }

  static notFound() {
    return new ApiError(404, "Not found");
  }
}

export default ApiError;

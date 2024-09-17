// services/ErrorService.ts

export const ErrorService = {
  handleError(error: any) {
    let errorMessage = "An unknown error occurred.";

    // Handle specific error responses
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          errorMessage = data.message || "Bad Request.";
          break;
        case 401:
          errorMessage = "Unauthorized. Please login.";
          break;
        case 403:
          errorMessage = "You do not have permission to perform this action.";
          break;
        case 404:
          errorMessage = "The requested resource was not found.";
          break;
        case 500:
          errorMessage = "Server error. Please try again later.";
          break;
        default:
          errorMessage =
            data.message || `Error ${status}: Something went wrong.`;
      }
    } else if (error.request) {
      // No response from the server
      errorMessage =
        "No response from the server. Please check your connection.";
    } else {
      // Other errors (non-server related, e.g., client-side errors)
      errorMessage = error.message;
    }

    return errorMessage;
  }
}

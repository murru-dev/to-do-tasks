import { useSnackbar } from "./useSnackbar";

export const useErrorHandler = () => {
  const { setSnackbar } = useSnackbar();

  const setError = (error: unknown) => {
    let showReload = false;
    let errType = "";
    let message = "";

    if (typeof error === "string") {
      errType += error;
    }

    switch (errType) {
      case "recaptcha_verify_fail":
        message += "Recaptcha challenge failed.";
        showReload = true;
        break;
      case "recaptcha_low_score":
        message += "Please check email and password";
        showReload = true;
        break;
      default:
        message += "Error code NE-001. Contact support";
        // Return to error page.
        break;
    }

    setSnackbar("error", message, showReload);
  };

  return {
    setError,
  };
};

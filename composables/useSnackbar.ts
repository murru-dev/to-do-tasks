const snackbar = reactive<SnackBar>({
  color: "",
  show: false,
  text: "",
  showReload: false,
});

export const useSnackbar = () => {
  const resetSnackbar = (): void => {
    snackbar.show = false;
    snackbar.color = "";
    snackbar.text = "";
    snackbar.showReload = false;
  };

  const setSnackbar = (
    color: string,
    text: string,
    showReload?: boolean
  ): void => {
    snackbar.color = color;
    snackbar.text = text;
    snackbar.show = true;
    snackbar.showReload = showReload ? showReload : false;
  };

  return {
    snackbar,
    resetSnackbar,
    setSnackbar,
  };
};

export default defineComponent({
  setup() {

    // Composables
    const route = useRoute();
    const { snackbar, resetSnackbar } = useSnackbar();

    // Methods
    const reload = () => {
      reloadNuxtApp({
        path: route.path,
        ttl: 1000, // default 10000
      });
    };

    return () => (
      <v-snackbar v-model={snackbar.show} color={snackbar.color} timeout="-1">
        <div class="d-flex align-center justify-space-between">
          {/* Show result message */}
          {snackbar.text}

          {/* Show reload page or reset button */}
          {
            snackbar.showReload ? (
              <v-btn size="x-small" class="ml-5" onClick={() => reload()}>
                Reload page
              </v-btn>
            ) : (
              <v-btn icon variant="text" onClick={() => resetSnackbar()} class="v-snackbar__close">
                <v-icon>mdi-close-box</v-icon>
              </v-btn>
            )
          }
        </div>
      </v-snackbar>
    )
  }
});

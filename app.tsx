import Form from "./components/Form";
import List from "./components/List";
import Snackbar from "./components/Snackbar";

export default defineComponent({
  setup() {
    return () => (
      <v-app>
        <v-container class="h-100 app-width">
          <h1 class="text-center">To Do Tasks</h1>
          <h2 class="text-center">Programming Test</h2>
          <br />
          <br />
          <br />
          <Form />
          <br />
          <br />
          <List />
          <Snackbar />
        </v-container>
      </v-app>
    )
  }
});

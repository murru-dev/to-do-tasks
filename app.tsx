import Form from "./components/Form";
import List from "./components/List";
import RecaptchaLogo from "./assets/img/google-recaptcha-icon.png";

export default defineComponent({
  setup() {
    return () => (
      <v-app>
        <v-container class="h-100 app-width">
          <h1 class="text-center">To Do Tasks</h1>
          <h2 class="text-center">Programming Test</h2>
          <div data-test="recaptcha-wrapper" class="d-flex gap-1 justify-center">
            <h4 class="text-light-blue-darken-3">Protected by Google's Recaptcha V3</h4>
            <img class="recaptcha" src={RecaptchaLogo} alt="Google's Recaptcha V3" />
          </div>
          <br />
          <br />
          <br />
          <Form />
          <br />
          <br />
          <List />
        </v-container>
      </v-app>
    )
  }
});

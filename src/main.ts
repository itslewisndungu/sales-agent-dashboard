import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";

// Prepare api mocking for the application with `msw`
async function prepareApp() {
  const { worker } = await import("./mocks/browser");

  return worker.start({
    // Allow non mocked requests to pass through without errors
    onUnhandledRequest: "bypass"
  });
}


prepareApp()
  .then(() => bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err)));

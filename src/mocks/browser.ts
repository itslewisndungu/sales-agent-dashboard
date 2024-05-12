import { setupWorker } from "msw/browser";
import { handlers } from "./schools";

export const worker = setupWorker(...handlers);

import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const remotes = {
  // @ts-ignore
  classification: import("@IL/classification"),
  // @ts-ignore
  train: import("@IL/train"),
  // @ts-ignore
  header: import("@IL/header")
};

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return remotes[name];
  },
});
console.log(applications);
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();


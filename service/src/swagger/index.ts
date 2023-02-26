import dotenv from "dotenv";
import path from "path";
import swaggerJSDoc from "swagger-jsdoc";

dotenv.config();

export const swaggerDocument = swaggerJSDoc({
  swaggerDefinition: {
    info: {
      title: "Documentation on Node API in the app's dictionary",
      version: process.env.npm_package_version ?? "",
      description:
        "Documentation created to facilitate the tests of the created endpoints.",
    },
    basePath: "/api",
    securityDefinitions: {
      Bearer: {
        type: "apiKey",
        name: "Authorization",
        scheme: "bearer",
        in: "header",
      },
    },
    externalDocs: {
      description: "Oxford Dictionaries",
      url: "https://developer.oxforddictionaries.com/documentation/getting_started",
    },
  },
  apis: [
    path.join(__filename, "../../api/controller/*/docs/*.yaml"),
    path.join(__filename, "../../api/controller/*/*/docs/*.yaml"),
  ],
  schemes: [
    path.join(__filename, "../../api/controller/*/docs/*.model.yaml"),
    path.join(__filename, "../../api/controller/*/*/docs/*.model.yaml"),
  ],
});

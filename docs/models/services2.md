# Services2

Services detected during build from vercel.json experimentalServices or auto-detected from project structure. Used to inject service URLs as environment variables at runtime.

## Example Usage

```typescript
import { Services2 } from "@vercel/sdk/models/canceldeploymentresponsebody.js";

let value: Services2 = {
  builder: {
    use: "<value>",
  },
  name: "<value>",
  root: "<value>",
  schema: "experimentalServicesV2",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `bindings`                                                                 | [models.Bindings](../models/bindings.md)[]                                 | :heavy_minus_sign:                                                         | Caller-side bindings to other services.                                    |
| `buildCommand`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `builder`                                                                  | [models.ServicesBuilder](../models/servicesbuilder.md)                     | :heavy_check_mark:                                                         | Builder selected by the resolver.                                          |
| `cleanUrls`                                                                | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `command`                                                                  | *string*[]                                                                 | :heavy_minus_sign:                                                         | Command override for `runtime: "container"` services.                      |
| `devCommand`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `entrypoint`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | Resolved entrypoint, relative to the service root.                         |
| `framework`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `functions`                                                                | Record<string, [models.ServicesFunctions](../models/servicesfunctions.md)> | :heavy_minus_sign:                                                         | Function configuration scoped to this service.                             |
| `headers`                                                                  | [models.ServicesHeaders](../models/servicesheaders.md)[]                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `ignoreCommand`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `installCommand`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `outputDirectory`                                                          | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `redirects`                                                                | [models.ServicesRedirects](../models/servicesredirects.md)[]               | :heavy_minus_sign:                                                         | N/A                                                                        |
| `rewrites`                                                                 | [models.Rewrites](../models/rewrites.md)[]                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `root`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Path to the service root, relative to the project root.                    |
| `routes`                                                                   | *models.ServicesRoutes*[]                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `runtime`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `schema`                                                                   | *"experimentalServicesV2"*                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `trailingSlash`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
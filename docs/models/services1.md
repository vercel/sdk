# Services1

Services detected during build from vercel.json experimentalServices or auto-detected from project structure. Used to inject service URLs as environment variables at runtime.

## Example Usage

```typescript
import { Services1 } from "@vercel/sdk/models/canceldeploymentgitrepoownertype.js";

let value: Services1 = {
  schema: "experimentalServices",
  name: "<value>",
  type: "cron",
  workspace: "<value>",
  builder: {
    use: "<value>",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `schema`                                                       | *"experimentalServices"*                                       | :heavy_check_mark:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `type`                                                         | [models.ServicesType](../models/servicestype.md)               | :heavy_check_mark:                                             | N/A                                                            |
| `trigger`                                                      | [models.Trigger](../models/trigger.md)                         | :heavy_minus_sign:                                             | N/A                                                            |
| `group`                                                        | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `workspace`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `entrypoint`                                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `framework`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `builder`                                                      | [models.Builder](../models/builder.md)                         | :heavy_check_mark:                                             | N/A                                                            |
| `runtime`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `buildCommand`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `installCommand`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `preDeployCommand`                                             | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `routePrefix`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `routePrefixSource`                                            | [models.RoutePrefixSource](../models/routeprefixsource.md)     | :heavy_minus_sign:                                             | N/A                                                            |
| `subdomain`                                                    | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `schedule`                                                     | *models.Schedule*                                              | :heavy_minus_sign:                                             | N/A                                                            |
| `handlerFunction`                                              | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `topics`                                                       | *models.Topics*                                                | :heavy_minus_sign:                                             | N/A                                                            |
| `env`                                                          | Record<string, [models.ServicesEnv](../models/servicesenv.md)> | :heavy_minus_sign:                                             | N/A                                                            |
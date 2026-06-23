# CreateDeploymentServicesEnv

## Example Usage

```typescript
import { CreateDeploymentServicesEnv } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentServicesEnv = {
  type: "service-ref",
  service: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [models.CreateDeploymentServicesType](../models/createdeploymentservicestype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `service`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
# ServicesEnv

## Example Usage

```typescript
import { ServicesEnv } from "@vercel/sdk/models/canceldeploymentresponsebody.js";

let value: ServicesEnv = {
  service: "<value>",
  type: "service-ref",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `service`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `type`                                                                           | [models.CancelDeploymentServicesType](../models/canceldeploymentservicestype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
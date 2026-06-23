# ServicesEnv

## Example Usage

```typescript
import { ServicesEnv } from "@vercel/sdk/models/flagsdefinitions.js";

let value: ServicesEnv = {
  type: "service-ref",
  service: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [models.CancelDeploymentServicesDeploymentsType](../models/canceldeploymentservicesdeploymentstype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `service`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
# CreateDeploymentServicesEnv

## Example Usage

```typescript
import { CreateDeploymentServicesEnv } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentServicesEnv = {
  service: "<value>",
  type: "service-ref",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `service`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [models.CreateDeploymentServicesDeploymentsType](../models/createdeploymentservicesdeploymentstype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
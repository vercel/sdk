# CreateDeploymentDestination2

## Example Usage

```typescript
import { CreateDeploymentDestination2 } from "@vercel/sdk/models/includefiles.js";

let value: CreateDeploymentDestination2 = {
  type: "service",
  service: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.CreateDeploymentDestinationType](../models/createdeploymentdestinationtype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `service`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `path`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Routing-only path used to select a route inside the target service.                    |
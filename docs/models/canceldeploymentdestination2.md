# CancelDeploymentDestination2

## Example Usage

```typescript
import { CancelDeploymentDestination2 } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentDestination2 = {
  type: "service",
  service: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [models.CancelDeploymentDestinationType](../models/canceldeploymentdestinationtype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `service`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `path`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Routing-only path used to select a route inside the target service.                    |
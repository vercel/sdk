# CancelDeploymentDestinationDeployments2

## Example Usage

```typescript
import { CancelDeploymentDestinationDeployments2 } from "@vercel/sdk/models/flagsdefinitions.js";

let value: CancelDeploymentDestinationDeployments2 = {
  type: "service",
  service: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [models.CancelDeploymentDestinationDeploymentsType](../models/canceldeploymentdestinationdeploymentstype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `service`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `path`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Routing-only path used to select a route inside the target service.                                          |
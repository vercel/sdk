# CancelDeploymentDestinationDeploymentsResponse2

## Example Usage

```typescript
import { CancelDeploymentDestinationDeploymentsResponse2 } from "@vercel/sdk/models/flagsdefinitions.js";

let value: CancelDeploymentDestinationDeploymentsResponse2 = {
  type: "service",
  service: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [models.CancelDeploymentDestinationDeploymentsResponseType](../models/canceldeploymentdestinationdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `service`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `path`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Routing-only path used to select a route inside the target service.                                                          |
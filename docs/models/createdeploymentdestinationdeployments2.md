# CreateDeploymentDestinationDeployments2

## Example Usage

```typescript
import { CreateDeploymentDestinationDeployments2 } from "@vercel/sdk/models/includefiles.js";

let value: CreateDeploymentDestinationDeployments2 = {
  type: "service",
  service: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [models.CreateDeploymentDestinationDeploymentsType](../models/createdeploymentdestinationdeploymentstype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `service`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `path`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Routing-only path used to select a route inside the target service.                                          |
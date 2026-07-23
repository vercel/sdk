# CreateDeploymentDestinationDeploymentsResponse2

## Example Usage

```typescript
import { CreateDeploymentDestinationDeploymentsResponse2 } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentDestinationDeploymentsResponse2 = {
  service: "<value>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                        | [models.CreateDeploymentDestinationDeploymentsResponseType](../models/createdeploymentdestinationdeploymentsresponsetype.md)  | :heavy_minus_sign:                                                                                                            | Optional explicit format marker. The destination is identified by the presence of `service`, so `type` is no longer required. |
| `service`                                                                                                                     | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `path`                                                                                                                        | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Routing-only path used to select a route inside the target service.                                                           |
# CreateDeploymentDestination2

## Example Usage

```typescript
import { CreateDeploymentDestination2 } from "@vercel/sdk/models/createdeploymentvaluedeploymentsresponse200applicationjsonresponsebody2services2redirectsmissing2.js";

let value: CreateDeploymentDestination2 = {
  service: "<value>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `path`                                                                                                                        | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Routing-only path used to select a route inside the target service.                                                           |
| `service`                                                                                                                     | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `type`                                                                                                                        | [models.CreateDeploymentDestinationType](../models/createdeploymentdestinationtype.md)                                        | :heavy_minus_sign:                                                                                                            | Optional explicit format marker. The destination is identified by the presence of `service`, so `type` is no longer required. |
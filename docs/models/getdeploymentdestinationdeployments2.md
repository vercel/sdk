# GetDeploymentDestinationDeployments2

## Example Usage

```typescript
import { GetDeploymentDestinationDeployments2 } from "@vercel/sdk/models/getdeploymentvaluedeploymentsresponse200applicationjsonresponsebody1services2routes1eq.js";

let value: GetDeploymentDestinationDeployments2 = {
  type: "service",
  service: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [models.GetDeploymentDestinationDeploymentsType](../models/getdeploymentdestinationdeploymentstype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `service`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `path`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Routing-only path used to select a route inside the target service.                                    |
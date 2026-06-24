# GetDeploymentDestinationDeploymentsResponse2

## Example Usage

```typescript
import { GetDeploymentDestinationDeploymentsResponse2 } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentDestinationDeploymentsResponse2 = {
  type: "service",
  service: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [models.GetDeploymentDestinationDeploymentsResponseType](../models/getdeploymentdestinationdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `service`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `path`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Routing-only path used to select a route inside the target service.                                                    |
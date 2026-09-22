# ResponseBodyChecks

## Example Usage

```typescript
import { ResponseBodyChecks } from "@vercel/sdk/models/getdeploymentgitsourcedeploymentsresponse200applicationjsonresponsebody219type.js";

let value: ResponseBodyChecks = {
  deploymentAlias: {
    startedAt: 4039.29,
    state: "succeeded",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `deploymentAlias`                                                                                        | [models.GetDeploymentResponseBodyDeploymentAlias](../models/getdeploymentresponsebodydeploymentalias.md) | :heavy_check_mark:                                                                                       | Condensed check data. Retrieve individual check and check run data using api-checks v2 routes.           |
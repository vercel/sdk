# ResponseBodyChecks

## Example Usage

```typescript
import { ResponseBodyChecks } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: ResponseBodyChecks = {
  deploymentAlias: {
    state: "pending",
    startedAt: 9310.58,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `deploymentAlias`                                                                                        | [models.GetDeploymentResponseBodyDeploymentAlias](../models/getdeploymentresponsebodydeploymentalias.md) | :heavy_check_mark:                                                                                       | Condensed check data. Retrieve individual check and check run data using api-checks v2 routes.           |
# CreateDeploymentResponseBodyChecks

## Example Usage

```typescript
import { CreateDeploymentResponseBodyChecks } from "@vercel/sdk/models/responsebodyremotepatterns.js";

let value: CreateDeploymentResponseBodyChecks = {
  deploymentAlias: {
    startedAt: 9416.77,
    state: "succeeded",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `deploymentAlias`                                                                              | [models.ResponseBodyDeploymentAlias](../models/responsebodydeploymentalias.md)                 | :heavy_check_mark:                                                                             | Condensed check data. Retrieve individual check and check run data using api-checks v2 routes. |
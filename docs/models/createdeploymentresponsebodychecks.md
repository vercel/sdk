# CreateDeploymentResponseBodyChecks

## Example Usage

```typescript
import { CreateDeploymentResponseBodyChecks } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentResponseBodyChecks = {
  deploymentAlias: {
    state: "succeeded",
    startedAt: 8582.41,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `deploymentAlias`                                                                              | [models.ResponseBodyDeploymentAlias](../models/responsebodydeploymentalias.md)                 | :heavy_check_mark:                                                                             | Condensed check data. Retrieve individual check and check run data using api-checks v2 routes. |
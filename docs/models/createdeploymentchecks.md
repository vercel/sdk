# CreateDeploymentChecks

## Example Usage

```typescript
import { CreateDeploymentChecks } from "@vercel/sdk/models/createdeploymentop.js";

let value: CreateDeploymentChecks = {
  deploymentAlias: {
    state: "pending",
    startedAt: 2579.52,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `deploymentAlias`                                                                              | [models.DeploymentAlias](../models/deploymentalias.md)                                         | :heavy_check_mark:                                                                             | Condensed check data. Retrieve individual check and check run data using api-checks v2 routes. |
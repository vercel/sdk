# CancelDeploymentChecks

## Example Usage

```typescript
import { CancelDeploymentChecks } from "@vercel/sdk/models/canceldeploymentop.js";

let value: CancelDeploymentChecks = {
  deploymentAlias: {
    state: "pending",
    startedAt: 2830.05,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `deploymentAlias`                                                                              | [models.CancelDeploymentDeploymentAlias](../models/canceldeploymentdeploymentalias.md)         | :heavy_check_mark:                                                                             | Condensed check data. Retrieve individual check and check run data using api-checks v2 routes. |
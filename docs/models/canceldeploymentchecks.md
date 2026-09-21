# CancelDeploymentChecks

## Example Usage

```typescript
import { CancelDeploymentChecks } from "@vercel/sdk/models/canceldeploymentbuildmachine.js";

let value: CancelDeploymentChecks = {
  deploymentAlias: {
    startedAt: 8799.79,
    state: "failed",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `deploymentAlias`                                                                              | [models.DeploymentAlias](../models/deploymentalias.md)                                         | :heavy_check_mark:                                                                             | Condensed check data. Retrieve individual check and check run data using api-checks v2 routes. |
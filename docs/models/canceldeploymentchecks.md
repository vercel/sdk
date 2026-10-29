# CancelDeploymentChecks

## Example Usage

```typescript
import { CancelDeploymentChecks } from "@vercel/sdk/models/canceldeploymentprojectsettings.js";

let value: CancelDeploymentChecks = {
  deploymentAlias: {
    startedAt: 8799.79,
    state: "failed",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `deploymentAlias`                                      | [models.DeploymentAlias](../models/deploymentalias.md) | :heavy_check_mark:                                     | N/A                                                    |
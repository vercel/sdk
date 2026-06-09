# DeploymentPolicy

Composable deployment-time policy for the team. Used as the default for every project on the team, with optional per-project overrides on `project.deploymentPolicy`.

## Example Usage

```typescript
import { DeploymentPolicy } from "@vercel/sdk/models/team.js";

let value: DeploymentPolicy = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `gitSources`                                                 | [models.GitSources](../models/gitsources.md)[]               | :heavy_minus_sign:                                           | N/A                                                          |
| `deploymentSources`                                          | [models.DeploymentSources](../models/deploymentsources.md)[] | :heavy_minus_sign:                                           | N/A                                                          |
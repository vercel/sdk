# DeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { DeploymentSources } from "@vercel/sdk/models/team.js";

let value: DeploymentSources = {
  sources: [],
  enabled: false,
  environments: [],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `sources`                                        | [models.TeamSources](../models/teamsources.md)[] | :heavy_check_mark:                               | N/A                                              |
| `enabled`                                        | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |
| `environments`                                   | *models.TeamDeploymentPolicyEnvironments*[]      | :heavy_check_mark:                               | N/A                                              |
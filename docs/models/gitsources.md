# GitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { GitSources } from "@vercel/sdk/models/team.js";

let value: GitSources = {
  enabled: true,
  environments: [],
  sources: [],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `enabled`                                   | *boolean*                                   | :heavy_check_mark:                          | N/A                                         |
| `environments`                              | *models.TeamDeploymentPolicyEnvironments*[] | :heavy_check_mark:                          | N/A                                         |
| `sources`                                   | *models.TeamSources*[]                      | :heavy_check_mark:                          | N/A                                         |
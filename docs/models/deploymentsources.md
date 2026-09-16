# DeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { DeploymentSources } from "@vercel/sdk/models/team.js";

let value: DeploymentSources = {
  enabled: true,
  environments: [
    {
      target: "production",
      type: "system",
    },
  ],
  sources: [
    "cli",
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `enabled`                                | *boolean*                                | :heavy_check_mark:                       | N/A                                      |
| `environments`                           | *models.TeamEnvironments*[]              | :heavy_check_mark:                       | N/A                                      |
| `sources`                                | [models.Sources](../models/sources.md)[] | :heavy_check_mark:                       | N/A                                      |
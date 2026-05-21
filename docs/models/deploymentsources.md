# DeploymentSources

Restricts which deployment sources are allowed. A deployment passes if its source is in `sources`. Multiple entries are evaluated as OR. `enabled: true` with an empty `sources` list is treated as deny-all.

## Example Usage

```typescript
import { DeploymentSources } from "@vercel/sdk/models/team.js";

let value: DeploymentSources = {
  sources: [],
  enabled: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `sources`                                        | [models.TeamSources](../models/teamsources.md)[] | :heavy_check_mark:                               | N/A                                              |
| `enabled`                                        | *boolean*                                        | :heavy_check_mark:                               | N/A                                              |
# GetProjectGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { GetProjectGitSources } from "@vercel/sdk/models/getprojectdestination.js";

let value: GetProjectGitSources = {
  sources: [],
  enabled: true,
  environments: [],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `sources`                         | *models.GetProjectSources*[]      | :heavy_check_mark:                | N/A                               |
| `enabled`                         | *boolean*                         | :heavy_check_mark:                | N/A                               |
| `environments`                    | *models.GetProjectEnvironments*[] | :heavy_check_mark:                | N/A                               |
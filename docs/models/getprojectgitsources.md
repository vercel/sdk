# GetProjectGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { GetProjectGitSources } from "@vercel/sdk/models/getprojectintegrations.js";

let value: GetProjectGitSources = {
  enabled: true,
  environments: [],
  sources: [],
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `enabled`                                 | *boolean*                                 | :heavy_check_mark:                        | N/A                                       |
| `environments`                            | *models.GetProjectProjectsEnvironments*[] | :heavy_check_mark:                        | N/A                                       |
| `sources`                                 | *models.GetProjectProjectsSources*[]      | :heavy_check_mark:                        | N/A                                       |
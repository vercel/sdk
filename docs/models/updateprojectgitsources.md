# UpdateProjectGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { UpdateProjectGitSources } from "@vercel/sdk/models/updateprojecttracing.js";

let value: UpdateProjectGitSources = {
  sources: [],
  enabled: false,
  environments: [],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `sources`                            | *models.UpdateProjectSources*[]      | :heavy_check_mark:                   | N/A                                  |
| `enabled`                            | *boolean*                            | :heavy_check_mark:                   | N/A                                  |
| `environments`                       | *models.UpdateProjectEnvironments*[] | :heavy_check_mark:                   | N/A                                  |
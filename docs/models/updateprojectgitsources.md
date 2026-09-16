# UpdateProjectGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { UpdateProjectGitSources } from "@vercel/sdk/models/updateprojectprojectsresponse200applicationjsonaction.js";

let value: UpdateProjectGitSources = {
  enabled: true,
  environments: [
    {
      target: "production",
      type: "system",
    },
  ],
  sources: [
    {
      namespace: "<value>",
      provider: "gitlab",
    },
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `enabled`                                    | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |
| `environments`                               | *models.UpdateProjectProjectsEnvironments*[] | :heavy_check_mark:                           | N/A                                          |
| `sources`                                    | *models.UpdateProjectProjectsSources*[]      | :heavy_check_mark:                           | N/A                                          |
# DeleteProjectAvatarGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { DeleteProjectAvatarGitSources } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarGitSources = {
  enabled: true,
  environments: [],
  sources: [
    {
      namespace: "<value>",
      provider: "gitlab",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `enabled`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `environments`                                     | *models.DeleteProjectAvatarProjectsEnvironments*[] | :heavy_check_mark:                                 | N/A                                                |
| `sources`                                          | *models.DeleteProjectAvatarProjectsSources*[]      | :heavy_check_mark:                                 | N/A                                                |
# UploadProjectAvatarGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { UploadProjectAvatarGitSources } from "@vercel/sdk/models/uploadprojectavatarhas2.js";

let value: UploadProjectAvatarGitSources = {
  enabled: false,
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
| `environments`                                     | *models.UploadProjectAvatarProjectsEnvironments*[] | :heavy_check_mark:                                 | N/A                                                |
| `sources`                                          | *models.UploadProjectAvatarProjectsSources*[]      | :heavy_check_mark:                                 | N/A                                                |
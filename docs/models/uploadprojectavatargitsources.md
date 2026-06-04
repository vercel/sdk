# UploadProjectAvatarGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { UploadProjectAvatarGitSources } from "@vercel/sdk/models/uploadprojectavatarresponsebody.js";

let value: UploadProjectAvatarGitSources = {
  sources: [
    {
      provider: "github",
      org: "<value>",
    },
  ],
  enabled: false,
  environments: [
    {
      type: "system",
      target: "production",
    },
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `sources`                                  | *models.UploadProjectAvatarSources*[]      | :heavy_check_mark:                         | N/A                                        |
| `enabled`                                  | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |
| `environments`                             | *models.UploadProjectAvatarEnvironments*[] | :heavy_check_mark:                         | N/A                                        |
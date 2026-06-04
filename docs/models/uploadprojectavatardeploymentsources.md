# UploadProjectAvatarDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { UploadProjectAvatarDeploymentSources } from "@vercel/sdk/models/uploadprojectavatarresponsebody.js";

let value: UploadProjectAvatarDeploymentSources = {
  sources: [],
  enabled: false,
  environments: [
    {
      type: "custom",
      environmentId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `sources`                                                                                      | [models.UploadProjectAvatarProjectsSources](../models/uploadprojectavatarprojectssources.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `enabled`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `environments`                                                                                 | *models.UploadProjectAvatarProjectsEnvironments*[]                                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
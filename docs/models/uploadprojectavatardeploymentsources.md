# UploadProjectAvatarDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { UploadProjectAvatarDeploymentSources } from "@vercel/sdk/models/uploadprojectavatarhas2.js";

let value: UploadProjectAvatarDeploymentSources = {
  enabled: true,
  environments: [
    {
      environmentId: "<id>",
      type: "custom",
    },
  ],
  sources: [
    "rest-api",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `environments`                                                                 | *models.UploadProjectAvatarEnvironments*[]                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `sources`                                                                      | [models.UploadProjectAvatarSources](../models/uploadprojectavatarsources.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
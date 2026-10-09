# DeleteProjectAvatarDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { DeleteProjectAvatarDeploymentSources } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarDeploymentSources = {
  enabled: true,
  environments: [
    {
      environmentId: "<id>",
      type: "custom",
    },
  ],
  sources: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `environments`                                                                 | *models.DeleteProjectAvatarEnvironments*[]                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `sources`                                                                      | [models.DeleteProjectAvatarSources](../models/deleteprojectavatarsources.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
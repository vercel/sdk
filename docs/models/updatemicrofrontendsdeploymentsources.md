# UpdateMicrofrontendsDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { UpdateMicrofrontendsDeploymentSources } from "@vercel/sdk/models/updatemicrofrontendsresponsebody.js";

let value: UpdateMicrofrontendsDeploymentSources = {
  sources: [
    "deploy-hook",
  ],
  enabled: true,
  environments: [
    {
      type: "custom",
      environmentId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `sources`                                                                                        | [models.UpdateMicrofrontendsProjectsSources](../models/updatemicrofrontendsprojectssources.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `enabled`                                                                                        | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `environments`                                                                                   | *models.UpdateMicrofrontendsProjectsEnvironments*[]                                              | :heavy_check_mark:                                                                               | N/A                                                                                              |
# UpdateMicrofrontendsDeploymentSources

Restricts which deployment sources are allowed. A deployment passes if its source is in `sources`. Multiple entries are evaluated as OR. `enabled: true` with an empty `sources` list is treated as deny-all.

## Example Usage

```typescript
import { UpdateMicrofrontendsDeploymentSources } from "@vercel/sdk/models/updatemicrofrontendsresponsebody.js";

let value: UpdateMicrofrontendsDeploymentSources = {
  sources: [
    "deploy-hook",
  ],
  enabled: true,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `sources`                                                                                        | [models.UpdateMicrofrontendsProjectsSources](../models/updatemicrofrontendsprojectssources.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `enabled`                                                                                        | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
# UpdateMicrofrontendsDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { UpdateMicrofrontendsDeploymentSources } from "@vercel/sdk/models/updatemicrofrontendshaskey.js";

let value: UpdateMicrofrontendsDeploymentSources = {
  enabled: false,
  environments: [
    {
      target: "production",
      type: "system",
    },
  ],
  sources: [
    "cli",
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `environments`                                                                   | *models.UpdateMicrofrontendsEnvironments*[]                                      | :heavy_check_mark:                                                               | N/A                                                                              |
| `sources`                                                                        | [models.UpdateMicrofrontendsSources](../models/updatemicrofrontendssources.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
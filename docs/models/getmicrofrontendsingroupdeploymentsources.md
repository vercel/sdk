# GetMicrofrontendsInGroupDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupDeploymentSources } from "@vercel/sdk/models/getmicrofrontendsingrouphasvalue.js";

let value: GetMicrofrontendsInGroupDeploymentSources = {
  enabled: false,
  environments: [],
  sources: [
    "deploy-hook",
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `environments`                                                                           | *models.GetMicrofrontendsInGroupEnvironments*[]                                          | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `sources`                                                                                | [models.GetMicrofrontendsInGroupSources](../models/getmicrofrontendsingroupsources.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
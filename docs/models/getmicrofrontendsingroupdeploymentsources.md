# GetMicrofrontendsInGroupDeploymentSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupDeploymentSources } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupDeploymentSources = {
  sources: [
    "cli",
  ],
  enabled: false,
  environments: [],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `sources`                                                                                                            | [models.GetMicrofrontendsInGroupMicrofrontendsSources](../models/getmicrofrontendsingroupmicrofrontendssources.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `environments`                                                                                                       | *models.GetMicrofrontendsInGroupMicrofrontendsEnvironments*[]                                                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
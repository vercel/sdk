# GetMicrofrontendsInGroupDeploymentSources

Restricts which deployment sources are allowed. A deployment passes if its source is in `sources`. Multiple entries are evaluated as OR. `enabled: true` with an empty `sources` list is treated as deny-all.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupDeploymentSources } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupDeploymentSources = {
  sources: [
    "cli",
  ],
  enabled: false,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `sources`                                                                                                            | [models.GetMicrofrontendsInGroupMicrofrontendsSources](../models/getmicrofrontendsingroupmicrofrontendssources.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
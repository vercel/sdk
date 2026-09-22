# GetMicrofrontendsInGroupGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupGitSources } from "@vercel/sdk/models/getmicrofrontendsingrouphas2.js";

let value: GetMicrofrontendsInGroupGitSources = {
  enabled: false,
  environments: [],
  sources: [
    {
      namespace: "<value>",
      provider: "gitlab",
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `enabled`                                                     | *boolean*                                                     | :heavy_check_mark:                                            | N/A                                                           |
| `environments`                                                | *models.GetMicrofrontendsInGroupMicrofrontendsEnvironments*[] | :heavy_check_mark:                                            | N/A                                                           |
| `sources`                                                     | *models.GetMicrofrontendsInGroupMicrofrontendsSources*[]      | :heavy_check_mark:                                            | N/A                                                           |
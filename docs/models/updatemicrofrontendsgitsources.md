# UpdateMicrofrontendsGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { UpdateMicrofrontendsGitSources } from "@vercel/sdk/models/updatemicrofrontendsresponsebody.js";

let value: UpdateMicrofrontendsGitSources = {
  sources: [
    {
      provider: "bitbucket",
      org: "<value>",
    },
  ],
  enabled: true,
  environments: [],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `sources`                                   | *models.UpdateMicrofrontendsSources*[]      | :heavy_check_mark:                          | N/A                                         |
| `enabled`                                   | *boolean*                                   | :heavy_check_mark:                          | N/A                                         |
| `environments`                              | *models.UpdateMicrofrontendsEnvironments*[] | :heavy_check_mark:                          | N/A                                         |
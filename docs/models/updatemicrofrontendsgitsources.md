# UpdateMicrofrontendsGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { UpdateMicrofrontendsGitSources } from "@vercel/sdk/models/updatemicrofrontendscreatedeployments.js";

let value: UpdateMicrofrontendsGitSources = {
  enabled: false,
  environments: [],
  sources: [],
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `enabled`                                           | *boolean*                                           | :heavy_check_mark:                                  | N/A                                                 |
| `environments`                                      | *models.UpdateMicrofrontendsProjectsEnvironments*[] | :heavy_check_mark:                                  | N/A                                                 |
| `sources`                                           | *models.UpdateMicrofrontendsProjectsSources*[]      | :heavy_check_mark:                                  | N/A                                                 |
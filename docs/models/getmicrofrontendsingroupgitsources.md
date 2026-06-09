# GetMicrofrontendsInGroupGitSources

`enabled: true` with empty `sources` is deny-all.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupGitSources } from "@vercel/sdk/models/getmicrofrontendsingroupresponsebody.js";

let value: GetMicrofrontendsInGroupGitSources = {
  sources: [
    {
      provider: "bitbucket",
      org: "<value>",
    },
  ],
  enabled: false,
  environments: [
    {
      type: "custom",
      environmentId: "<id>",
    },
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `sources`                                       | *models.GetMicrofrontendsInGroupSources*[]      | :heavy_check_mark:                              | N/A                                             |
| `enabled`                                       | *boolean*                                       | :heavy_check_mark:                              | N/A                                             |
| `environments`                                  | *models.GetMicrofrontendsInGroupEnvironments*[] | :heavy_check_mark:                              | N/A                                             |
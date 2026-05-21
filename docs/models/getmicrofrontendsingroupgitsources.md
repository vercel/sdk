# GetMicrofrontendsInGroupGitSources

Restricts inbound Git deployments to an allowlist of orgs and/or repos. `enabled: true` with an empty `sources` list is treated as deny-all.

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
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `sources`                                  | *models.GetMicrofrontendsInGroupSources*[] | :heavy_check_mark:                         | N/A                                        |
| `enabled`                                  | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |
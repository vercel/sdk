# UpdateMicrofrontendsGitSources

Restricts inbound Git deployments to an allowlist of orgs and/or repos. `enabled: true` with an empty `sources` list is treated as deny-all.

## Example Usage

```typescript
import { UpdateMicrofrontendsGitSources } from "@vercel/sdk/models/updatemicrofrontendsresponsebody.js";

let value: UpdateMicrofrontendsGitSources = {
  sources: [
    {
      provider: "gitlab",
      org: "<value>",
    },
  ],
  enabled: true,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `sources`                              | *models.UpdateMicrofrontendsSources*[] | :heavy_check_mark:                     | N/A                                    |
| `enabled`                              | *boolean*                              | :heavy_check_mark:                     | N/A                                    |
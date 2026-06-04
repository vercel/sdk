# PatchTeamGitSources1

## Example Usage

```typescript
import { PatchTeamGitSources1 } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamGitSources1 = {
  enabled: false,
  environments: [
    {
      type: "system",
      target: "preview",
    },
  ],
  sources: [],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `enabled`                                  | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |
| `environments`                             | *models.PatchTeamGitSourcesEnvironments*[] | :heavy_check_mark:                         | N/A                                        |
| `sources`                                  | *models.PatchTeamGitSourcesSources*[]      | :heavy_check_mark:                         | N/A                                        |
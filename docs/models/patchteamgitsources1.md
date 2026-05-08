# PatchTeamGitSources1

## Example Usage

```typescript
import { PatchTeamGitSources1 } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamGitSources1 = {
  enabled: false,
  sources: [
    {
      provider: "github",
      org: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `enabled`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `sources`                                                                      | [models.PatchTeamGitSourcesSources](../models/patchteamgitsourcessources.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
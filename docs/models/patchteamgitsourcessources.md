# PatchTeamGitSourcesSources

## Example Usage

```typescript
import { PatchTeamGitSourcesSources } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamGitSourcesSources = {
  provider: "bitbucket",
  org: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `provider`                                                                     | [models.PatchTeamGitSourcesProvider](../models/patchteamgitsourcesprovider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `org`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `repo`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
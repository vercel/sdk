# GetProjectsSources1

Allowlist entry for GitHub and Bitbucket, whose repos are identified by a flat `org`/`repo` (Bitbucket's workspace/owner maps to `org`, its repo slug to `repo`). Omit `repo` to match any repo in the org. Org is matched case-insensitively.

## Example Usage

```typescript
import { GetProjectsSources1 } from "@vercel/sdk/models/getprojectsresponsebodyprojectsnodeversion.js";

let value: GetProjectsSources1 = {
  provider: "bitbucket",
  org: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `provider`                                                                   | [models.GetProjectsSourcesProvider](../models/getprojectssourcesprovider.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `org`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `repo`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
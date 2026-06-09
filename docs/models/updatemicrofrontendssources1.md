# UpdateMicrofrontendsSources1

Allowlist entry for GitHub and Bitbucket, whose repos are identified by a flat `org`/`repo` (Bitbucket's workspace/owner maps to `org`, its repo slug to `repo`). Omit `repo` to match any repo in the org. Org is matched case-insensitively.

## Example Usage

```typescript
import { UpdateMicrofrontendsSources1 } from "@vercel/sdk/models/updatemicrofrontendsresponsebody.js";

let value: UpdateMicrofrontendsSources1 = {
  provider: "github",
  org: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `provider`                                                                                     | [models.UpdateMicrofrontendsSourcesProvider](../models/updatemicrofrontendssourcesprovider.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `org`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `repo`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
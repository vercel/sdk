# UploadProjectAvatarSources1

Allowlist entry for GitHub and Bitbucket, whose repos are identified by a flat `org`/`repo` (Bitbucket's workspace/owner maps to `org`, its repo slug to `repo`). Omit `repo` to match any repo in the org. Org is matched case-insensitively.

## Example Usage

```typescript
import { UploadProjectAvatarSources1 } from "@vercel/sdk/models/uploadprojectavatartracing.js";

let value: UploadProjectAvatarSources1 = {
  provider: "bitbucket",
  org: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `provider`                                                                                   | [models.UploadProjectAvatarSourcesProvider](../models/uploadprojectavatarsourcesprovider.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `org`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `repo`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
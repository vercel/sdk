# UserEventPayload379Previous

Automatic code review settings

## Example Usage

```typescript
import { UserEventPayload379Previous } from "@vercel/sdk/models/threehundredandsixtytwo.js";

let value: UserEventPayload379Previous = {
  enabled: false,
  includeDrafts: false,
  scope: "all",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether automatic code reviews are enabled                                                                           |
| `includeDrafts`                                                                                                      | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether to include draft pull requests in automatic reviews                                                          |
| `scope`                                                                                                              | [models.UserEventPayload379PreviousScope](../models/usereventpayload379previousscope.md)                             | :heavy_check_mark:                                                                                                   | Which repository visibilities get automatic reviews                                                                  |
| `selectedRepos`                                                                                                      | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | GitHub repos to scope automatic reviews to. Format: "owner/repo" (lowercase). Only used when scope='selected_repos'. |
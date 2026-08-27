# UserEventPayload346Next

Automatic code review settings

## Example Usage

```typescript
import { UserEventPayload346Next } from "@vercel/sdk/models/usereventpayload328names.js";

let value: UserEventPayload346Next = {
  enabled: true,
  scope: "public",
  includeDrafts: true,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether automatic code reviews are enabled                                                                           |
| `scope`                                                                                                              | [models.UserEventPayload346NextScope](../models/usereventpayload346nextscope.md)                                     | :heavy_check_mark:                                                                                                   | Which repository visibilities get automatic reviews                                                                  |
| `includeDrafts`                                                                                                      | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether to include draft pull requests in automatic reviews                                                          |
| `selectedRepos`                                                                                                      | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | GitHub repos to scope automatic reviews to. Format: "owner/repo" (lowercase). Only used when scope='selected_repos'. |
# UserEventPayload385Previous

Automatic code review settings

## Example Usage

```typescript
import { UserEventPayload385Previous } from "@vercel/sdk/models/threehundredandsixtyeight.js";

let value: UserEventPayload385Previous = {
  enabled: true,
  includeDrafts: false,
  scope: "selected_repos",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether automatic code reviews are enabled                                                                           |
| `includeDrafts`                                                                                                      | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether to include draft pull requests in automatic reviews                                                          |
| `scope`                                                                                                              | [models.UserEventPayload385PreviousScope](../models/usereventpayload385previousscope.md)                             | :heavy_check_mark:                                                                                                   | Which repository visibilities get automatic reviews                                                                  |
| `selectedRepos`                                                                                                      | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | GitHub repos to scope automatic reviews to. Format: "owner/repo" (lowercase). Only used when scope='selected_repos'. |
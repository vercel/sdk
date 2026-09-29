# UserEventPayload373Previous

Automatic code review settings

## Example Usage

```typescript
import { UserEventPayload373Previous } from "@vercel/sdk/models/usereventpayload354geolocationnames.js";

let value: UserEventPayload373Previous = {
  enabled: false,
  includeDrafts: true,
  scope: "private",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether automatic code reviews are enabled                                                                           |
| `includeDrafts`                                                                                                      | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether to include draft pull requests in automatic reviews                                                          |
| `scope`                                                                                                              | [models.UserEventPayload373PreviousScope](../models/usereventpayload373previousscope.md)                             | :heavy_check_mark:                                                                                                   | Which repository visibilities get automatic reviews                                                                  |
| `selectedRepos`                                                                                                      | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | GitHub repos to scope automatic reviews to. Format: "owner/repo" (lowercase). Only used when scope='selected_repos'. |
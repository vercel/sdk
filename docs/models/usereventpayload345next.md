# UserEventPayload345Next

Automatic code review settings

## Example Usage

```typescript
import { UserEventPayload345Next } from "@vercel/sdk/models/usereventpayload327geolocationmostspecificsubdivisionnames.js";

let value: UserEventPayload345Next = {
  enabled: true,
  scope: "all",
  includeDrafts: false,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether automatic code reviews are enabled                                                                           |
| `scope`                                                                                                              | [models.UserEventPayload345NextScope](../models/usereventpayload345nextscope.md)                                     | :heavy_check_mark:                                                                                                   | Which repository visibilities get automatic reviews                                                                  |
| `includeDrafts`                                                                                                      | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether to include draft pull requests in automatic reviews                                                          |
| `selectedRepos`                                                                                                      | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | GitHub repos to scope automatic reviews to. Format: "owner/repo" (lowercase). Only used when scope='selected_repos'. |
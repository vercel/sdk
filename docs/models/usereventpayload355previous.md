# UserEventPayload355Previous

Automatic code review settings

## Example Usage

```typescript
import { UserEventPayload355Previous } from "@vercel/sdk/models/threehundredandfortytwo.js";

let value: UserEventPayload355Previous = {
  enabled: true,
  scope: "public",
  includeDrafts: false,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                            | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether automatic code reviews are enabled                                                                           |
| `scope`                                                                                                              | [models.UserEventPayload355Scope](../models/usereventpayload355scope.md)                                             | :heavy_check_mark:                                                                                                   | Which repository visibilities get automatic reviews                                                                  |
| `includeDrafts`                                                                                                      | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether to include draft pull requests in automatic reviews                                                          |
| `selectedRepos`                                                                                                      | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | GitHub repos to scope automatic reviews to. Format: "owner/repo" (lowercase). Only used when scope='selected_repos'. |
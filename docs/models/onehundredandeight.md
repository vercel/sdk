# OneHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEight } from "@vercel/sdk/models/usereventpayloadresources.js";

let value: OneHundredAndEight = {
  actorAccountId: null,
  actorLogin: "<value>",
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  headSha: "<value>",
  prNumber: 1326.14,
  reviewUrl: "https://turbulent-release.com",
  team: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `actorAccountId`                                                       | *number*                                                               | :heavy_check_mark:                                                     | Stable GitHub user id.                                                 |
| `actorLogin`                                                           | *string*                                                               | :heavy_check_mark:                                                     | Display name only. Logins are mutable; join on `actorAccountId`.       |
| `gitOwnerName`                                                         | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `gitRepositoryName`                                                    | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `headSha`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `prNumber`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `reviewUrl`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `team`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The `:must-assume` team the approval counted for, e.g. "vercel/leads". |
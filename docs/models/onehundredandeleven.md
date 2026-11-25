# OneHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEleven } from "@vercel/sdk/models/usereventpayload82resourcestype.js";

let value: OneHundredAndEleven = {
  actorAccountId: 5233.59,
  actorLogin: "<value>",
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  headSha: "<value>",
  prNumber: 9559.84,
  reviewUrl: "https://slimy-flood.biz",
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
| `isAuthor`                                                             | *boolean*                                                              | :heavy_minus_sign:                                                     | The actor opted in on their own pull request instead of approving it.  |
| `prNumber`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `reviewUrl`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `team`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The `:must-assume` team the approval counted for, e.g. "vercel/leads". |
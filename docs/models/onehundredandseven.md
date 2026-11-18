# OneHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeven } from "@vercel/sdk/models/usereventpayload72action.js";

let value: OneHundredAndSeven = {
  actorAccountId: null,
  actorLogin: "<value>",
  gitOwnerName: "<value>",
  gitRepositoryName: "<value>",
  headSha: "<value>",
  prNumber: 8663.84,
  reviewUrl: "https://frilly-habit.org",
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
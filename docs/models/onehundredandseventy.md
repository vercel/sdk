# OneHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventy } from "@vercel/sdk/models/onehundredandsixty.js";

let value: OneHundredAndSeventy = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: true,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `projectId`              | *string*                 | :heavy_check_mark:       | N/A                      |
| `projectName`            | *string*                 | :heavy_check_mark:       | N/A                      |
| `requireVerifiedCommits` | *boolean*                | :heavy_check_mark:       | N/A                      |
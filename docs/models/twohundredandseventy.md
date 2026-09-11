# TwoHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventy } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndSeventy = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: null,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `projectId`              | *string*                 | :heavy_check_mark:       | N/A                      |
| `projectName`            | *string*                 | :heavy_check_mark:       | N/A                      |
| `requireVerifiedCommits` | *boolean*                | :heavy_check_mark:       | N/A                      |
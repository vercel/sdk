# ThreeHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyOne } from "@vercel/sdk/models/threehundredandtwentyfive.js";

let value: ThreeHundredAndFortyOne = {
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
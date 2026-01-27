# NinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyEight } from "@vercel/sdk/models/userevent.js";

let value: NinetyEight = {
  projectId: "<id>",
  projectName: "<value>",
  requireVerifiedCommits: false,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `projectId`              | *string*                 | :heavy_check_mark:       | N/A                      |
| `projectName`            | *string*                 | :heavy_check_mark:       | N/A                      |
| `requireVerifiedCommits` | *boolean*                | :heavy_check_mark:       | N/A                      |
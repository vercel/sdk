# OneHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFour } from "@vercel/sdk/models/analyticsusage.js";

let value: OneHundredAndSixtyFour = {
  projectId: "<id>",
  projectName: "<value>",
  deletedCount: 4045.47,
  scriptCount: 9181.17,
  connectSrcCount: 1977.52,
  connectSrcOriginCount: 9689.7,
  headerCount: 2877.57,
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `projectId`             | *string*                | :heavy_check_mark:      | N/A                     |
| `projectName`           | *string*                | :heavy_check_mark:      | N/A                     |
| `deletedCount`          | *number*                | :heavy_check_mark:      | N/A                     |
| `scriptCount`           | *number*                | :heavy_check_mark:      | N/A                     |
| `connectSrcCount`       | *number*                | :heavy_check_mark:      | N/A                     |
| `connectSrcOriginCount` | *number*                | :heavy_check_mark:      | N/A                     |
| `headerCount`           | *number*                | :heavy_check_mark:      | N/A                     |
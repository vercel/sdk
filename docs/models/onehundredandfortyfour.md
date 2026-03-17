# OneHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyFour } from "@vercel/sdk/models/payloadteampermissions.js";

let value: OneHundredAndFortyFour = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: true,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `projectId`                       | *string*                          | :heavy_check_mark:                | N/A                               |
| `projectName`                     | *string*                          | :heavy_check_mark:                | N/A                               |
| `sourceFilesOutsideRootDirectory` | *boolean*                         | :heavy_check_mark:                | N/A                               |
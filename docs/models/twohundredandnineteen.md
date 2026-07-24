# TwoHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNineteen } from "@vercel/sdk/models/twohundredandeleven.js";

let value: TwoHundredAndNineteen = {
  projectId: "<id>",
  projectName: "<value>",
  sourceFilesOutsideRootDirectory: false,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `projectId`                       | *string*                          | :heavy_check_mark:                | N/A                               |
| `projectName`                     | *string*                          | :heavy_check_mark:                | N/A                               |
| `sourceFilesOutsideRootDirectory` | *boolean*                         | :heavy_check_mark:                | N/A                               |
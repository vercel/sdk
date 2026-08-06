# TwoHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyEight } from "@vercel/sdk/models/one1.js";

let value: TwoHundredAndTwentyEight = {
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
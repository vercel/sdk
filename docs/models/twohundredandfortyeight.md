# TwoHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyEight } from "@vercel/sdk/models/envid.js";

let value: TwoHundredAndFortyEight = {
  projectId: "<id>",
  projectName: "<value>",
  disableRepositoryDispatchEvents: false,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `projectId`                       | *string*                          | :heavy_check_mark:                | N/A                               |
| `projectName`                     | *string*                          | :heavy_check_mark:                | N/A                               |
| `disableRepositoryDispatchEvents` | *boolean*                         | :heavy_check_mark:                | N/A                               |
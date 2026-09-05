# TwoHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyFive } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndSixtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  disableRepositoryDispatchEvents: true,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `projectId`                       | *string*                          | :heavy_check_mark:                | N/A                               |
| `projectName`                     | *string*                          | :heavy_check_mark:                | N/A                               |
| `disableRepositoryDispatchEvents` | *boolean*                         | :heavy_check_mark:                | N/A                               |
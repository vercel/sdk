# TwoHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventeen } from "@vercel/sdk/models/payloadgituserid.js";

let value: TwoHundredAndSeventeen = {
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
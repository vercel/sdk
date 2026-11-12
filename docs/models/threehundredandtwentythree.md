# ThreeHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyThree } from "@vercel/sdk/models/usereventpayloadprivatelinkendpoint.js";

let value: ThreeHundredAndTwentyThree = {
  disableRepositoryDispatchEvents: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `disableRepositoryDispatchEvents` | *boolean*                         | :heavy_check_mark:                | N/A                               |
| `projectId`                       | *string*                          | :heavy_check_mark:                | N/A                               |
| `projectName`                     | *string*                          | :heavy_check_mark:                | N/A                               |
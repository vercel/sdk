# ThreeHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTen } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundredAndTen = {
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
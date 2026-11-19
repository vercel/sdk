# ThreeHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyOne } from "@vercel/sdk/models/threehundredandfifteen.js";

let value: ThreeHundredAndThirtyOne = {
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
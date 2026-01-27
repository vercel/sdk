# NinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySix } from "@vercel/sdk/models/userevent.js";

let value: NinetySix = {
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
# OneHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyTwo } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  autoAssignCustomDomains: true,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `projectId`               | *string*                  | :heavy_check_mark:        | N/A                       |
| `projectName`             | *string*                  | :heavy_check_mark:        | N/A                       |
| `autoAssignCustomDomains` | *boolean*                 | :heavy_check_mark:        | N/A                       |
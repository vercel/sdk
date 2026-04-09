# OneHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftySeven } from "@vercel/sdk/models/payloadresourceconfig.js";

let value: OneHundredAndFiftySeven = {
  projectId: "<id>",
  projectName: "<value>",
  autoAssignCustomDomains: false,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `projectId`               | *string*                  | :heavy_check_mark:        | N/A                       |
| `projectName`             | *string*                  | :heavy_check_mark:        | N/A                       |
| `autoAssignCustomDomains` | *boolean*                 | :heavy_check_mark:        | N/A                       |
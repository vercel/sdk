# TwoHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtySeven } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndThirtySeven = {
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
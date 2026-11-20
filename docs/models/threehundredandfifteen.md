# ThreeHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFifteen } from "@vercel/sdk/models/payloaddsyncmode.js";

let value: ThreeHundredAndFifteen = {
  autoAssignCustomDomains: true,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `autoAssignCustomDomains` | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `projectId`               | *string*                  | :heavy_check_mark:        | N/A                       |
| `projectName`             | *string*                  | :heavy_check_mark:        | N/A                       |
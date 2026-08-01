# TwoHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventy } from "@vercel/sdk/models/envid.js";

let value: TwoHundredAndSeventy = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  destinationAccountName: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `previousProjectId`      | *string*                 | :heavy_minus_sign:       | N/A                      |
| `newProjectId`           | *string*                 | :heavy_minus_sign:       | N/A                      |
| `previousProjectName`    | *string*                 | :heavy_check_mark:       | N/A                      |
| `newProjectName`         | *string*                 | :heavy_check_mark:       | N/A                      |
| `destinationAccountName` | *string*                 | :heavy_check_mark:       | N/A                      |
| `transferId`             | *string*                 | :heavy_minus_sign:       | N/A                      |
# ThreeHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftySeven } from "@vercel/sdk/models/threehundredandtwentyfour.js";

let value: ThreeHundredAndFiftySeven = {
  destinationAccountName: "<value>",
  newProjectName: "<value>",
  previousProjectName: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `destinationAccountName` | *string*                 | :heavy_check_mark:       | N/A                      |
| `newProjectId`           | *string*                 | :heavy_minus_sign:       | N/A                      |
| `newProjectName`         | *string*                 | :heavy_check_mark:       | N/A                      |
| `previousProjectId`      | *string*                 | :heavy_minus_sign:       | N/A                      |
| `previousProjectName`    | *string*                 | :heavy_check_mark:       | N/A                      |
| `transferId`             | *string*                 | :heavy_minus_sign:       | N/A                      |
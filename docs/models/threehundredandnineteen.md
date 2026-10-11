# ThreeHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNineteen } from "@vercel/sdk/models/threehundredandeight.js";

let value: ThreeHundredAndNineteen = {
  destinationAccountName: "<value>",
  projectName: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `destinationAccountName` | *string*                 | :heavy_check_mark:       | N/A                      |
| `previousProjectId`      | *string*                 | :heavy_minus_sign:       | N/A                      |
| `projectName`            | *string*                 | :heavy_check_mark:       | N/A                      |
| `transferId`             | *string*                 | :heavy_minus_sign:       | N/A                      |
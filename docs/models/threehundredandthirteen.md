# ThreeHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirteen } from "@vercel/sdk/models/twohundredandninetyseven.js";

let value: ThreeHundredAndThirteen = {
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
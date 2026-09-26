# ThreeHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFive } from "@vercel/sdk/models/twohundredandeightythree.js";

let value: ThreeHundredAndFive = {
  destinationAccountId: "<id>",
  destinationAccountName: "<value>",
  originAccountName: "<value>",
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `destinationAccountId`   | *string*                 | :heavy_check_mark:       | N/A                      |
| `destinationAccountName` | *string*                 | :heavy_check_mark:       | N/A                      |
| `originAccountName`      | *string*                 | :heavy_check_mark:       | N/A                      |
| `projectId`              | *string*                 | :heavy_check_mark:       | N/A                      |
| `projectName`            | *string*                 | :heavy_check_mark:       | N/A                      |
| `transferId`             | *string*                 | :heavy_minus_sign:       | N/A                      |
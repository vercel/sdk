# OneHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyNine } from "@vercel/sdk/models/usereventpayload162next.js";

let value: OneHundredAndEightyNine = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  destinationAccountName: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `previousProjectName`    | *string*                 | :heavy_check_mark:       | N/A                      |
| `newProjectName`         | *string*                 | :heavy_check_mark:       | N/A                      |
| `destinationAccountName` | *string*                 | :heavy_check_mark:       | N/A                      |
| `transferId`             | *string*                 | :heavy_minus_sign:       | N/A                      |
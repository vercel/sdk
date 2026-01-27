# OneHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyThree } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndEightyThree = {
  projectName: "<value>",
  destinationAccountName: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `projectName`            | *string*                 | :heavy_check_mark:       | N/A                      |
| `destinationAccountName` | *string*                 | :heavy_check_mark:       | N/A                      |
| `transferId`             | *string*                 | :heavy_minus_sign:       | N/A                      |
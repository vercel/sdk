# ThreeHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyTwo } from "@vercel/sdk/models/usereventpayload317type.js";

let value: ThreeHundredAndFiftyTwo = {
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
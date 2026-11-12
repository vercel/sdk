# ThreeHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyTwo } from "@vercel/sdk/models/usereventpayloadprivatelinkendpoint.js";

let value: ThreeHundredAndFortyTwo = {
  newProjectName: "<value>",
  originAccountName: "<value>",
  previousProjectName: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `newProjectId`        | *string*              | :heavy_minus_sign:    | N/A                   |
| `newProjectName`      | *string*              | :heavy_check_mark:    | N/A                   |
| `originAccountName`   | *string*              | :heavy_check_mark:    | N/A                   |
| `previousProjectId`   | *string*              | :heavy_minus_sign:    | N/A                   |
| `previousProjectName` | *string*              | :heavy_check_mark:    | N/A                   |
| `transferId`          | *string*              | :heavy_minus_sign:    | N/A                   |
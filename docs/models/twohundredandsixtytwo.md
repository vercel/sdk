# TwoHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyTwo } from "@vercel/sdk/models/twohundredandeleven.js";

let value: TwoHundredAndSixtyTwo = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  originAccountName: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `previousProjectId`   | *string*              | :heavy_minus_sign:    | N/A                   |
| `newProjectId`        | *string*              | :heavy_minus_sign:    | N/A                   |
| `previousProjectName` | *string*              | :heavy_check_mark:    | N/A                   |
| `newProjectName`      | *string*              | :heavy_check_mark:    | N/A                   |
| `originAccountName`   | *string*              | :heavy_check_mark:    | N/A                   |
| `transferId`          | *string*              | :heavy_minus_sign:    | N/A                   |
# ThreeHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTen } from "@vercel/sdk/models/twohundredandninetyfive.js";

let value: ThreeHundredAndTen = {
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
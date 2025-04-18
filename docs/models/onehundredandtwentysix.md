# OneHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentySix } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwentySix = {
  previousProjectName: "<value>",
  newProjectName: "<value>",
  originAccountName: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `previousProjectName` | *string*              | :heavy_check_mark:    | N/A                   |
| `newProjectName`      | *string*              | :heavy_check_mark:    | N/A                   |
| `originAccountName`   | *string*              | :heavy_check_mark:    | N/A                   |
| `transferId`          | *string*              | :heavy_minus_sign:    | N/A                   |
# TwoHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwelve } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndTwelve = {
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
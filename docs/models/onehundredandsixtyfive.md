# OneHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFive } from "@vercel/sdk/models/usereventpayloadtarget.js";

let value: OneHundredAndSixtyFive = {
  projectId: "<id>",
  previousOwnerId: "<id>",
  newOwnerId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_minus_sign: | N/A                |
| `previousOwnerId`  | *string*           | :heavy_check_mark: | N/A                |
| `newOwnerId`       | *string*           | :heavy_check_mark: | N/A                |
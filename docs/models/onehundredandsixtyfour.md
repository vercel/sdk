# OneHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFour } from "@vercel/sdk/models/onehundredandfiftyone.js";

let value: OneHundredAndSixtyFour = {
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
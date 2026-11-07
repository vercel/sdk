# OneHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyOne } from "@vercel/sdk/models/payloadinitiator.js";

let value: OneHundredAndNinetyOne = {
  newOwnerId: "<id>",
  previousOwnerId: "<id>",
  projectId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `newOwnerId`       | *string*           | :heavy_check_mark: | N/A                |
| `previousOwnerId`  | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_minus_sign: | N/A                |
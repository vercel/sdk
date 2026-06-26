# OneHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndForty } from "@vercel/sdk/models/onehundredandtwenty.js";

let value: OneHundredAndForty = {
  projectId: "<id>",
  previousOwnerId: "<id>",
  newOwnerId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `previousOwnerId`  | *string*           | :heavy_check_mark: | N/A                |
| `newOwnerId`       | *string*           | :heavy_check_mark: | N/A                |
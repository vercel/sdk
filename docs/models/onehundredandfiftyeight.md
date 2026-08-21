# OneHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyEight } from "@vercel/sdk/models/toaccount.js";

let value: OneHundredAndFiftyEight = {
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
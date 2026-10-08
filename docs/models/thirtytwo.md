# ThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyTwo } from "@vercel/sdk/models/via3.js";

let value: ThirtyTwo = {
  amount: "80.09",
  purchaseIntentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `amount`           | *string*           | :heavy_check_mark: | N/A                |
| `purchaseIntentId` | *string*           | :heavy_check_mark: | N/A                |
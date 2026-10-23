# ThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyFour } from "@vercel/sdk/models/twenty.js";

let value: ThirtyFour = {
  amount: "161.97",
  purchaseIntentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `amount`           | *string*           | :heavy_check_mark: | N/A                |
| `purchaseIntentId` | *string*           | :heavy_check_mark: | N/A                |
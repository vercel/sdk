# TwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyOne } from "@vercel/sdk/models/userevent.js";

let value: TwentyOne = {
  amount: "733.90",
  purchaseIntentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `amount`           | *string*           | :heavy_check_mark: | N/A                |
| `purchaseIntentId` | *string*           | :heavy_check_mark: | N/A                |
# TwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentySix } from "@vercel/sdk/models/userevent.js";

let value: TwentySix = {
  amount: "187.11",
  purchaseIntentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `amount`           | *string*           | :heavy_check_mark: | N/A                |
| `purchaseIntentId` | *string*           | :heavy_check_mark: | N/A                |
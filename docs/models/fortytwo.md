# FortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyTwo } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: FortyTwo = {
  amount: "192.34",
  purchaseIntentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `amount`           | *string*           | :heavy_check_mark: | N/A                |
| `purchaseIntentId` | *string*           | :heavy_check_mark: | N/A                |
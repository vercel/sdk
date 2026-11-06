# ThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtySeven } from "@vercel/sdk/models/userevent.js";

let value: ThirtySeven = {
  amount: "263.94",
  purchaseIntentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `amount`           | *string*           | :heavy_check_mark: | N/A                |
| `purchaseIntentId` | *string*           | :heavy_check_mark: | N/A                |
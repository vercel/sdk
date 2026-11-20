# NinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyOne } from "@vercel/sdk/models/usereventpayloadresources.js";

let value: NinetyOne = {
  paymentMethodId: "<id>",
  subscriptionId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `paymentMethodId`  | *string*           | :heavy_check_mark: | N/A                |
| `subscriptionId`   | *string*           | :heavy_check_mark: | N/A                |
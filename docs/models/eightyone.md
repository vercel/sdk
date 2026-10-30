# EightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyOne } from "@vercel/sdk/models/usereventpayload26apikey.js";

let value: EightyOne = {
  paymentMethodId: "<id>",
  subscriptionId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `paymentMethodId`  | *string*           | :heavy_check_mark: | N/A                |
| `subscriptionId`   | *string*           | :heavy_check_mark: | N/A                |
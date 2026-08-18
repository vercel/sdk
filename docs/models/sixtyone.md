# SixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyOne } from "@vercel/sdk/models/usereventpayloadrefreshperiod.js";

let value: SixtyOne = {
  paymentMethodId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `paymentMethodId`  | *string*           | :heavy_check_mark: | N/A                |
| `brand`            | *string*           | :heavy_minus_sign: | N/A                |
| `last4`            | *string*           | :heavy_minus_sign: | N/A                |
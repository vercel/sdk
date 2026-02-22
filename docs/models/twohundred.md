# TwoHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundred } from "@vercel/sdk/models/onehundredandsixtyfour.js";

let value: TwoHundred = {
  paymentMethodId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `paymentMethodId`  | *string*           | :heavy_check_mark: | N/A                |
| `brand`            | *string*           | :heavy_minus_sign: | N/A                |
| `last4`            | *string*           | :heavy_minus_sign: | N/A                |
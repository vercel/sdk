# SixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySeven } from "@vercel/sdk/models/fiftytwo.js";

let value: SixtySeven = {
  paymentMethodId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `brand`            | *string*           | :heavy_minus_sign: | N/A                |
| `last4`            | *string*           | :heavy_minus_sign: | N/A                |
| `paymentMethodId`  | *string*           | :heavy_check_mark: | N/A                |
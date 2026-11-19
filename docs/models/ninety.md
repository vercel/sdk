# Ninety

The payload of the event, if requested.

## Example Usage

```typescript
import { Ninety } from "@vercel/sdk/models/payloadresources.js";

let value: Ninety = {
  paymentMethodId: "<id>",
  subscriptionId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `paymentMethodId`  | *string*           | :heavy_check_mark: | N/A                |
| `subscriptionId`   | *string*           | :heavy_check_mark: | N/A                |
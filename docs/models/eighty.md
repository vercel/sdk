# Eighty

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighty } from "@vercel/sdk/models/usereventpayload22provider.js";

let value: Eighty = {
  paymentMethodId: "<id>",
  subscriptionId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `paymentMethodId`  | *string*           | :heavy_check_mark: | N/A                |
| `subscriptionId`   | *string*           | :heavy_check_mark: | N/A                |
# EightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyThree } from "@vercel/sdk/models/rule.js";

let value: EightyThree = {
  paymentMethodId: "<id>",
  subscriptionId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `paymentMethodId`  | *string*           | :heavy_check_mark: | N/A                |
| `subscriptionId`   | *string*           | :heavy_check_mark: | N/A                |
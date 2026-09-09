# Seventy

The payload of the event, if requested.

## Example Usage

```typescript
import { Seventy } from "@vercel/sdk/models/payloadrule.js";

let value: Seventy = {
  productAliases: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `subscriptionId`   | *string*           | :heavy_minus_sign: | N/A                |
| `productAliases`   | *string*[]         | :heavy_check_mark: | N/A                |
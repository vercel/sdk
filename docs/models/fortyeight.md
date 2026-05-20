# FortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyEight } from "@vercel/sdk/models/before.js";

let value: FortyEight = {
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
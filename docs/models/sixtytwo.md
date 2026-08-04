# SixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyTwo } from "@vercel/sdk/models/payloadresources.js";

let value: SixtyTwo = {
  productAliases: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `subscriptionId`   | *string*           | :heavy_minus_sign: | N/A                |
| `productAliases`   | *string*[]         | :heavy_check_mark: | N/A                |
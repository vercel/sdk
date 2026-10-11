# EightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyThree } from "@vercel/sdk/models/after.js";

let value: EightyThree = {
  productAliases: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `subscriptionId`   | *string*           | :heavy_minus_sign: | N/A                |
| `productAliases`   | *string*[]         | :heavy_check_mark: | N/A                |
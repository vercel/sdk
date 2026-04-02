# SeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventySix } from "@vercel/sdk/models/usereventpayloadproject.js";

let value: SeventySix = {
  name: "<value>",
  price: 8965.35,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `price`            | *number*           | :heavy_check_mark: | N/A                |
| `currency`         | *string*           | :heavy_minus_sign: | N/A                |
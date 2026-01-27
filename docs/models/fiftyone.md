# FiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyOne } from "@vercel/sdk/models/userevent.js";

let value: FiftyOne = {
  name: "<value>",
  price: 8561.8,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `price`            | *number*           | :heavy_check_mark: | N/A                |
| `currency`         | *string*           | :heavy_minus_sign: | N/A                |
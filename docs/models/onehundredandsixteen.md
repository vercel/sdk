# OneHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixteen } from "@vercel/sdk/models/deployhook.js";

let value: OneHundredAndSixteen = {
  name: "<value>",
  price: 3966.63,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `price`            | *number*           | :heavy_check_mark: | N/A                |
| `currency`         | *string*           | :heavy_minus_sign: | N/A                |
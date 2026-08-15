# OneHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTen } from "@vercel/sdk/models/usereventpayload80configuration.js";

let value: OneHundredAndTen = {
  name: "<value>",
  price: 1249.58,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `price`            | *number*           | :heavy_check_mark: | N/A                |
| `currency`         | *string*           | :heavy_minus_sign: | N/A                |
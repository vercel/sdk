# OneHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFour } from "@vercel/sdk/models/jobprovider.js";

let value: OneHundredAndFour = {
  name: "<value>",
  price: 9509.85,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `price`            | *number*           | :heavy_check_mark: | N/A                |
| `currency`         | *string*           | :heavy_minus_sign: | N/A                |
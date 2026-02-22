# FiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyNine } from "@vercel/sdk/models/oldteam.js";

let value: FiftyNine = {
  name: "<value>",
  price: 6462.86,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `price`            | *number*           | :heavy_check_mark: | N/A                |
| `currency`         | *string*           | :heavy_minus_sign: | N/A                |
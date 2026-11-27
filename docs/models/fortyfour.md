# FortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyFour } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: FortyFour = {
  added: [
    "<value 1>",
    "<value 2>",
  ],
  removed: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `added`            | *string*[]         | :heavy_check_mark: | N/A                |
| `removed`          | *string*[]         | :heavy_check_mark: | N/A                |
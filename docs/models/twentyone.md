# TwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyOne } from "@vercel/sdk/models/usereventpayloadrefreshperiod.js";

let value: TwentyOne = {
  added: [
    "<value 1>",
    "<value 2>",
  ],
  removed: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `added`            | *string*[]         | :heavy_check_mark: | N/A                |
| `removed`          | *string*[]         | :heavy_check_mark: | N/A                |
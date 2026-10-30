# ThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtySeven } from "@vercel/sdk/models/usereventpayload26apikey.js";

let value: ThirtySeven = {
  added: [
    "<value 1>",
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
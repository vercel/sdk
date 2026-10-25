# ThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtySix } from "@vercel/sdk/models/twentyone.js";

let value: ThirtySix = {
  added: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  removed: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `added`            | *string*[]         | :heavy_check_mark: | N/A                |
| `removed`          | *string*[]         | :heavy_check_mark: | N/A                |
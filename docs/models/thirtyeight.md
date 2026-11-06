# ThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyEight } from "@vercel/sdk/models/userevent.js";

let value: ThirtyEight = {
  added: [
    "<value 1>",
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
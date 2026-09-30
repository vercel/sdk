# Thirty

The payload of the event, if requested.

## Example Usage

```typescript
import { Thirty } from "@vercel/sdk/models/via3.js";

let value: Thirty = {
  added: [
    "<value 1>",
    "<value 2>",
  ],
  removed: [],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `added`            | *string*[]         | :heavy_check_mark: | N/A                |
| `removed`          | *string*[]         | :heavy_check_mark: | N/A                |
# Forty

The payload of the event, if requested.

## Example Usage

```typescript
import { Forty } from "@vercel/sdk/models/userevent.js";

let value: Forty = {
  added: [],
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
# Srv

## Example Usage

```typescript
import { Srv } from "@vercel/sdk/models/updaterecordop.js";

let value: Srv = {
  target: "example2.com.",
  weight: 204144,
  port: 16729,
  priority: 884622,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `target`           | *string*           | :heavy_check_mark: | N/A                | example2.com.      |
| `weight`           | *number*           | :heavy_check_mark: | N/A                |                    |
| `port`             | *number*           | :heavy_check_mark: | N/A                |                    |
| `priority`         | *number*           | :heavy_check_mark: | N/A                |                    |
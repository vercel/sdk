# History

(scanner history). Since November 2021. First element is newest.

## Example Usage

```typescript
import { History } from "@vercel/sdk/models/userevent.js";

let value: History = {
  scanner: "<value>",
  reason: "<value>",
  by: "<value>",
  byId: "<id>",
  at: 6328.5,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `scanner`          | *string*           | :heavy_check_mark: | N/A                |
| `reason`           | *string*           | :heavy_check_mark: | N/A                |
| `by`               | *string*           | :heavy_check_mark: | N/A                |
| `byId`             | *string*           | :heavy_check_mark: | N/A                |
| `at`               | *number*           | :heavy_check_mark: | N/A                |
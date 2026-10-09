# Ten

The payload of the event, if requested.

## Example Usage

```typescript
import { Ten } from "@vercel/sdk/models/principal.js";

let value: Ten = {
  boardId: "<id>",
  fields: [
    "<value 1>",
  ],
  operationId: "<id>",
  spaceId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `boardId`          | *string*           | :heavy_check_mark: | N/A                |
| `fields`           | *string*[]         | :heavy_check_mark: | N/A                |
| `operationId`      | *string*           | :heavy_check_mark: | N/A                |
| `spaceId`          | *string*           | :heavy_check_mark: | N/A                |
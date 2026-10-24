# Eleven

The payload of the event, if requested.

## Example Usage

```typescript
import { Eleven } from "@vercel/sdk/models/userevent.js";

let value: Eleven = {
  boardId: "<id>",
  channelId: "<id>",
  fields: [],
  operationId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `boardId`          | *string*           | :heavy_check_mark: | N/A                |
| `channelId`        | *string*           | :heavy_check_mark: | N/A                |
| `fields`           | *string*[]         | :heavy_check_mark: | N/A                |
| `operationId`      | *string*           | :heavy_check_mark: | N/A                |
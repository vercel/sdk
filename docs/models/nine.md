# Nine

The payload of the event, if requested.

## Example Usage

```typescript
import { Nine } from "@vercel/sdk/models/userevent.js";

let value: Nine = {
  boardId: "<id>",
  channelId: "<id>",
  operationId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `boardId`          | *string*           | :heavy_check_mark: | N/A                |
| `channelId`        | *string*           | :heavy_check_mark: | N/A                |
| `operationId`      | *string*           | :heavy_check_mark: | N/A                |
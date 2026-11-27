# Sixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Sixteen } from "@vercel/sdk/models/userevent.js";

let value: Sixteen = {
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
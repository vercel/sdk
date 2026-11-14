# Sixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Sixteen } from "@vercel/sdk/models/usereventvia4type.js";

let value: Sixteen = {
  boardId: "<id>",
  channelId: "<id>",
  fields: [
    "<value 1>",
    "<value 2>",
  ],
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
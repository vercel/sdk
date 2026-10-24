# Ten

The payload of the event, if requested.

## Example Usage

```typescript
import { Ten } from "@vercel/sdk/models/userevent.js";

let value: Ten = {
  boardId: "<id>",
  channelId: "<id>",
  environment: "<value>",
  name: "<value>",
  operationId: "<id>",
  projectId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `boardId`          | *string*           | :heavy_check_mark: | N/A                |
| `channelId`        | *string*           | :heavy_check_mark: | N/A                |
| `environment`      | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `operationId`      | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `userId`           | *string*           | :heavy_minus_sign: | N/A                |
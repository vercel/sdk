# Thirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Thirteen } from "@vercel/sdk/models/userevent.js";

let value: Thirteen = {
  boardId: "<id>",
  environments: [],
  operationId: "<id>",
  projectId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `boardId`          | *string*           | :heavy_check_mark: | N/A                |
| `environments`     | *string*[]         | :heavy_check_mark: | N/A                |
| `operationId`      | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
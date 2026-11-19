# Nineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Nineteen } from "@vercel/sdk/models/thirteen.js";

let value: Nineteen = {
  boardId: "<id>",
  environments: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
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
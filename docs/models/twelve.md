# Twelve

The payload of the event, if requested.

## Example Usage

```typescript
import { Twelve } from "@vercel/sdk/models/payloadaction.js";

let value: Twelve = {
  boardId: "<id>",
  grantId: "<id>",
  operationId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `boardId`          | *string*           | :heavy_check_mark: | N/A                |
| `grantId`          | *string*           | :heavy_check_mark: | N/A                |
| `operationId`      | *string*           | :heavy_check_mark: | N/A                |
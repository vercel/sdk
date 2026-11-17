# Twenty

The payload of the event, if requested.

## Example Usage

```typescript
import { Twenty } from "@vercel/sdk/models/usereventprincipaltype.js";

let value: Twenty = {
  boardId: "<id>",
  operationId: "<id>",
  projectId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `boardId`          | *string*           | :heavy_check_mark: | N/A                |
| `operationId`      | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
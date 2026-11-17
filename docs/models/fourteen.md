# Fourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Fourteen } from "@vercel/sdk/models/usereventprincipaltype.js";

let value: Fourteen = {
  boardId: "<id>",
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
| `environment`      | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `operationId`      | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `userId`           | *string*           | :heavy_minus_sign: | N/A                |
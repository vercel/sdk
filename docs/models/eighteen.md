# Eighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighteen } from "@vercel/sdk/models/userevent.js";

let value: Eighteen = {
  operationId: "<id>",
  schemaId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `operationId`      | *string*           | :heavy_check_mark: | N/A                |
| `schemaId`         | *string*           | :heavy_check_mark: | N/A                |
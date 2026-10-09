# Twelve

The payload of the event, if requested.

## Example Usage

```typescript
import { Twelve } from "@vercel/sdk/models/principal.js";

let value: Twelve = {
  operationId: "<id>",
  schemaId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `operationId`      | *string*           | :heavy_check_mark: | N/A                |
| `schemaId`         | *string*           | :heavy_check_mark: | N/A                |
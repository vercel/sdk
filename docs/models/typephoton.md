# TypePhoton

## Example Usage

```typescript
import { TypePhoton } from "@vercel/sdk/models/createconnectorop.js";

let value: TypePhoton = {
  projectId: "<id>",
  projectSecret: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectSecret`    | *string*           | :heavy_check_mark: | N/A                |
| `webhookSecret`    | *string*           | :heavy_minus_sign: | N/A                |
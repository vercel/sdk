# ResponseBodyResult

## Example Usage

```typescript
import { ResponseBodyResult } from "@vercel/sdk/models/addbypassipop.js";

let value: ResponseBodyResult = {
  ownerId: "<id>",
  id: "<id>",
  domain: "zany-platter.com",
  projectId: "<id>",
  note: "<value>",
  isProjectRule: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ownerId`          | *string*           | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `ip`               | *string*           | :heavy_minus_sign: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `note`             | *string*           | :heavy_check_mark: | N/A                |
| `isProjectRule`    | *boolean*          | :heavy_check_mark: | N/A                |
# GetProjectBoxesItems

## Example Usage

```typescript
import { GetProjectBoxesItems } from "@vercel/sdk/models/getprojectboxesop.js";

let value: GetProjectBoxesItems = {
  id: "<id>",
  region: "<value>",
  startedAt: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `alive`            | *boolean*          | :heavy_minus_sign: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `image`            | *string*           | :heavy_minus_sign: | N/A                |
| `lastCheckedAt`    | *string*           | :heavy_minus_sign: | N/A                |
| `memoryMiB`        | *number*           | :heavy_minus_sign: | N/A                |
| `region`           | *string*           | :heavy_check_mark: | N/A                |
| `startedAt`        | *string*           | :heavy_check_mark: | N/A                |
| `stoppedAt`        | *string*           | :heavy_minus_sign: | N/A                |
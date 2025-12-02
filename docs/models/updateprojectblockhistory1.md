# UpdateProjectBlockHistory1

## Example Usage

```typescript
import { UpdateProjectBlockHistory1 } from "@vercel/sdk/models/updateprojectop.js";

let value: UpdateProjectBlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 9457.82,
  createdAt: 6178.34,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `action`           | *"blocked"*        | :heavy_check_mark: | N/A                |
| `reason`           | *string*           | :heavy_check_mark: | N/A                |
| `statusCode`       | *number*           | :heavy_check_mark: | N/A                |
| `createdAt`        | *number*           | :heavy_check_mark: | N/A                |
| `caseId`           | *string*           | :heavy_minus_sign: | N/A                |
| `actor`            | *string*           | :heavy_minus_sign: | N/A                |
| `comment`          | *string*           | :heavy_minus_sign: | N/A                |
| `isCascading`      | *boolean*          | :heavy_minus_sign: | N/A                |
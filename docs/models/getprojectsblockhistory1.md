# GetProjectsBlockHistory1

## Example Usage

```typescript
import { GetProjectsBlockHistory1 } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsBlockHistory1 = {
  action: "blocked",
  reason: "<value>",
  statusCode: 2902.14,
  createdAt: 1211.81,
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
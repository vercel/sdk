# CreateProjectBlockHistory2

## Example Usage

```typescript
import { CreateProjectBlockHistory2 } from "@vercel/sdk/models/createprojectop.js";

let value: CreateProjectBlockHistory2 = {
  action: "unblocked",
  createdAt: 3560.16,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `action`           | *"unblocked"*      | :heavy_check_mark: | N/A                |
| `createdAt`        | *number*           | :heavy_check_mark: | N/A                |
| `caseId`           | *string*           | :heavy_minus_sign: | N/A                |
| `actor`            | *string*           | :heavy_minus_sign: | N/A                |
| `comment`          | *string*           | :heavy_minus_sign: | N/A                |
| `isCascading`      | *boolean*          | :heavy_minus_sign: | N/A                |
# AddBypassIpResponseBodyResult

## Example Usage

```typescript
import { AddBypassIpResponseBodyResult } from "@vercel/sdk/models/addbypassipop.js";

let value: AddBypassIpResponseBodyResult = {
  ownerId: "<id>",
  id: "<id>",
  domain: "smoggy-stay.org",
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
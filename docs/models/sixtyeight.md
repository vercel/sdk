# SixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyEight } from "@vercel/sdk/models/twenty.js";

let value: SixtyEight = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `alias`            | *string*           | :heavy_check_mark: | N/A                |
| `aliasId`          | *string*           | :heavy_check_mark: | N/A                |
| `deploymentId`     | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |
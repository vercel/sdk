# FortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyOne } from "@vercel/sdk/models/eighteen.js";

let value: FortyOne = {
  alias: "<value>",
  aliasId: "<id>",
  deploymentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |
| `alias`            | *string*           | :heavy_check_mark: | N/A                |
| `aliasId`          | *string*           | :heavy_check_mark: | N/A                |
| `deploymentId`     | *string*           | :heavy_check_mark: | N/A                |
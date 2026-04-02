# Fourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { Fourteen } from "@vercel/sdk/models/userevent.js";

let value: Fourteen = {
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
# FiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftySeven } from "@vercel/sdk/models/usereventpayload22provider.js";

let value: FiftySeven = {
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
# FiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFour } from "@vercel/sdk/models/principal.js";

let value: FiftyFour = {
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
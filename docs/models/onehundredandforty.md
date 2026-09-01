# OneHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndForty } from "@vercel/sdk/models/ninetyeight.js";

let value: OneHundredAndForty = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `edgeConfigId`     | *string*           | :heavy_check_mark: | N/A                |
| `edgeConfigSlug`   | *string*           | :heavy_check_mark: | N/A                |
| `edgeConfigDigest` | *string*           | :heavy_minus_sign: | N/A                |
# FiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftySix } from "@vercel/sdk/models/oldteam.js";

let value: FiftySix = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "cuddly-forgery.name",
  type: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `value`            | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |
| `mxPriority`       | *number*           | :heavy_minus_sign: | N/A                |
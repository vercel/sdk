# SeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyTwo } from "@vercel/sdk/models/usereventpayloadproject.js";

let value: SeventyTwo = {
  id: "<id>",
  value: "<value>",
  name: "<value>",
  domain: "imaginary-luck.com",
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
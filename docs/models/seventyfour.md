# SeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyFour } from "@vercel/sdk/models/payloadrule.js";

let value: SeventyFour = {
  id: "<id>",
  cns: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  custom: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `cns`              | *string*[]         | :heavy_check_mark: | N/A                |
| `custom`           | *boolean*          | :heavy_check_mark: | N/A                |
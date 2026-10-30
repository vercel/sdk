# NinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyTwo } from "@vercel/sdk/models/eightynine.js";

let value: NinetyTwo = {
  cns: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  custom: false,
  id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cns`              | *string*[]         | :heavy_check_mark: | N/A                |
| `custom`           | *boolean*          | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
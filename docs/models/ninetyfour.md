# NinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyFour } from "@vercel/sdk/models/rule.js";

let value: NinetyFour = {
  cns: [
    "<value 1>",
    "<value 2>",
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
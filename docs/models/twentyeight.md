# TwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyEight } from "@vercel/sdk/models/oldteam.js";

let value: TwentyEight = {
  id: "<id>",
  cns: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  custom: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `cns`              | *string*[]         | :heavy_check_mark: | N/A                |
| `custom`           | *boolean*          | :heavy_check_mark: | N/A                |
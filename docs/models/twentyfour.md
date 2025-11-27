# TwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFour } from "@vercel/sdk/models/userevent.js";

let value: TwentyFour = {
  custom: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cn`               | *string*           | :heavy_minus_sign: | N/A                |
| `cns`              | *string*[]         | :heavy_minus_sign: | N/A                |
| `custom`           | *boolean*          | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_minus_sign: | N/A                |
# TwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFour } from "@vercel/sdk/models/userevent.js";

let value: TwentyFour = {
  id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `cn`               | *string*           | :heavy_minus_sign: | N/A                |
| `cns`              | *string*[]         | :heavy_minus_sign: | N/A                |
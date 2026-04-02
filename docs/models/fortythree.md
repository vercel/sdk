# FortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyThree } from "@vercel/sdk/models/usereventpayloadproject.js";

let value: FortyThree = {
  id: "<id>",
  cns: [],
  custom: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `cns`              | *string*[]         | :heavy_check_mark: | N/A                |
| `custom`           | *boolean*          | :heavy_check_mark: | N/A                |
# SixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySix } from "@vercel/sdk/models/usereventpayloaditems.js";

let value: SixtySix = {
  id: "<id>",
  cns: [
    "<value 1>",
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
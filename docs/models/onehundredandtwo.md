# OneHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwo } from "@vercel/sdk/models/usereventpayloadresources.js";

let value: OneHundredAndTwo = {
  cns: [
    "<value 1>",
  ],
  custom: true,
  id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cns`              | *string*[]         | :heavy_check_mark: | N/A                |
| `custom`           | *boolean*          | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
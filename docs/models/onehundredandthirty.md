# OneHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirty } from "@vercel/sdk/models/usereventpayloadjoinedfrom.js";

let value: OneHundredAndThirty = {
  ownerId: "<id>",
  source: "<value>",
  cause: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ownerId`          | *string*           | :heavy_check_mark: | N/A                |
| `source`           | *string*           | :heavy_check_mark: | N/A                |
| `cause`            | *string*           | :heavy_check_mark: | N/A                |
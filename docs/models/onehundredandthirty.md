# OneHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirty } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirty = {
  email: "Neil85@gmail.com",
  prevEmail: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `email`            | *string*           | :heavy_check_mark: | N/A                |
| `prevEmail`        | *string*           | :heavy_check_mark: | N/A                |
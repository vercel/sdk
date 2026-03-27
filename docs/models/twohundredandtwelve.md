# TwoHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwelve } from "@vercel/sdk/models/usereventpayload159next.js";

let value: TwoHundredAndTwelve = {
  uid: "<id>",
  name: {
    name: "<value>",
  },
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `uid`              | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *models.Name*      | :heavy_check_mark: | N/A                |
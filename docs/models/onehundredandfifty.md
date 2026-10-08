# OneHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFifty } from "@vercel/sdk/models/usereventjobaction.js";

let value: OneHundredAndFifty = {
  drainName: "<value>",
  drainUrl: "https://good-fax.biz",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `drainName`        | *string*           | :heavy_check_mark: | N/A                |
| `drainUrl`         | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |
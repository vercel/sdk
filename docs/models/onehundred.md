# OneHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundred } from "@vercel/sdk/models/userevent.js";

let value: OneHundred = {
  drainUrl: "https://spirited-birdbath.name",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `drainUrl`         | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |
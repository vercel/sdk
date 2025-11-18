# SeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventySix } from "@vercel/sdk/models/userevent.js";

let value: SeventySix = {
  drainUrl: "https://subdued-curl.biz/",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `drainUrl`         | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |
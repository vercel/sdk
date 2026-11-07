# OneHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyEight } from "@vercel/sdk/models/payloadinitiator.js";

let value: OneHundredAndFiftyEight = {
  drainName: null,
  drainUrl: "https://squiggly-lobster.name/",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `drainName`        | *string*           | :heavy_check_mark: | N/A                |
| `drainUrl`         | *string*           | :heavy_check_mark: | N/A                |
| `id`               | *string*           | :heavy_minus_sign: | N/A                |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |
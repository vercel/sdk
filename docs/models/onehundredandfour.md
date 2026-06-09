# OneHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFour } from "@vercel/sdk/models/ninetyfour.js";

let value: OneHundredAndFour = {
  drainUrl: "https://gigantic-help.org",
  drainName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `drainUrl`         | *string*           | :heavy_check_mark: | N/A                |
| `drainName`        | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_minus_sign: | N/A                |
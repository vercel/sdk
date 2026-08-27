# OneHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighty } from "@vercel/sdk/models/datacachewrite.js";

let value: OneHundredAndEighty = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `issuerId`         | *string*           | :heavy_check_mark: | N/A                |
| `issuerName`       | *string*           | :heavy_check_mark: | N/A                |
| `kind`             | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_minus_sign: | N/A                |
| `clientId`         | *string*           | :heavy_minus_sign: | N/A                |
| `environments`     | *string*[]         | :heavy_minus_sign: | N/A                |
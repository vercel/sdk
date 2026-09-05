# OneHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyThree } from "@vercel/sdk/models/bandwidth.js";

let value: OneHundredAndEightyThree = {
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
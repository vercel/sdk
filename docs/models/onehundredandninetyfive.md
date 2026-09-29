# OneHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyFive } from "@vercel/sdk/models/sourceimages.js";

let value: OneHundredAndNinetyFive = {
  issuerId: "<id>",
  issuerName: "<value>",
  kind: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `clientId`         | *string*           | :heavy_minus_sign: | N/A                |
| `environments`     | *string*[]         | :heavy_minus_sign: | N/A                |
| `issuerId`         | *string*           | :heavy_check_mark: | N/A                |
| `issuerName`       | *string*           | :heavy_check_mark: | N/A                |
| `kind`             | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_minus_sign: | N/A                |
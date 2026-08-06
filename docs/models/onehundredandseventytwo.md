# OneHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyTwo } from "@vercel/sdk/models/usereventpayloaddatacache.js";

let value: OneHundredAndSeventyTwo = {
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
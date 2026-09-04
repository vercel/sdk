# OneHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighty } from "@vercel/sdk/models/bandwidth.js";

let value: OneHundredAndEighty = {
  issuerId: "<id>",
  issuerName: "<value>",
  algorithm: "<value>",
  origin: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `issuerId`         | *string*           | :heavy_check_mark: | N/A                |
| `issuerName`       | *string*           | :heavy_check_mark: | N/A                |
| `algorithm`        | *string*           | :heavy_check_mark: | N/A                |
| `origin`           | *string*           | :heavy_check_mark: | N/A                |
| `managedBy`        | *string*           | :heavy_minus_sign: | N/A                |
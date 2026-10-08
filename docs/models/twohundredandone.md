# TwoHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndOne } from "@vercel/sdk/models/lasteditedbyprincipal2.js";

let value: TwoHundredAndOne = {
  algorithm: "<value>",
  issuerId: "<id>",
  issuerName: "<value>",
  origin: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `algorithm`        | *string*           | :heavy_check_mark: | N/A                |
| `issuerId`         | *string*           | :heavy_check_mark: | N/A                |
| `issuerName`       | *string*           | :heavy_check_mark: | N/A                |
| `managedBy`        | *string*           | :heavy_minus_sign: | N/A                |
| `origin`           | *string*           | :heavy_check_mark: | N/A                |
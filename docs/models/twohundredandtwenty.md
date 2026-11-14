# TwoHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwenty } from "@vercel/sdk/models/edgeconfig.js";

let value: TwoHundredAndTwenty = {
  issuerId: "<id>",
  issuerName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `issuerId`         | *string*           | :heavy_check_mark: | N/A                |
| `issuerName`       | *string*           | :heavy_check_mark: | N/A                |
| `keyId`            | *string*           | :heavy_minus_sign: | N/A                |
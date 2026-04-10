# PayloadNext

## Example Usage

```typescript
import { PayloadNext } from "@vercel/sdk/models/payloaddefaultpurchasetype.js";

let value: PayloadNext = {
  clientId: "<id>",
  deploymentType: "<value>",
  issuer: "american_express",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `clientId`         | *string*           | :heavy_check_mark: | N/A                |
| `cookieName`       | *string*           | :heavy_minus_sign: | N/A                |
| `deploymentType`   | *string*           | :heavy_check_mark: | N/A                |
| `issuer`           | *string*           | :heavy_check_mark: | N/A                |
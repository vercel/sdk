# PayloadPrevious

## Example Usage

```typescript
import { PayloadPrevious } from "@vercel/sdk/models/payloaddefaultpurchasetype.js";

let value: PayloadPrevious = {
  clientId: "<id>",
  deploymentType: "<value>",
  issuer: "visa",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `clientId`         | *string*           | :heavy_check_mark: | N/A                |
| `cookieName`       | *string*           | :heavy_minus_sign: | N/A                |
| `deploymentType`   | *string*           | :heavy_check_mark: | N/A                |
| `issuer`           | *string*           | :heavy_check_mark: | N/A                |
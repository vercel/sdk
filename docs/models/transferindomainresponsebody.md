# TransferInDomainResponseBody

Success

## Example Usage

```typescript
import { TransferInDomainResponseBody } from "@vercel/sdk/models/transferindomainop.js";

let value: TransferInDomainResponseBody = {
  orderId: "<id>",
  links: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `orderId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | A valid order ID                                                                   |
| `links`                                                                            | Record<string, [models.TransferInDomainLinks](../models/transferindomainlinks.md)> | :heavy_check_mark:                                                                 | N/A                                                                                |
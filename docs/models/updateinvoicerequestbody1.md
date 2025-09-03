# UpdateInvoiceRequestBody1

## Example Usage

```typescript
import { UpdateInvoiceRequestBody1 } from "@vercel/sdk/models/updateinvoiceop.js";

let value: UpdateInvoiceRequestBody1 = {
  action: "refund",
  reason: "<value>",
  total: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `action`                                                                                        | [models.RequestBodyAction](../models/requestbodyaction.md)                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `reason`                                                                                        | *string*                                                                                        | :heavy_check_mark:                                                                              | Refund reason.                                                                                  |
| `total`                                                                                         | *string*                                                                                        | :heavy_check_mark:                                                                              | The total amount to be refunded. Must be less than or equal to the total amount of the invoice. |
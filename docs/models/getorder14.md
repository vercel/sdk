# GetOrder14

## Example Usage

```typescript
import { GetOrder14 } from "@vercel/sdk/models/getorderop.js";

let value: GetOrder14 = {
  code: "cannot-transfer-in-until",
  details: {
    numDaysUntilTransferrable: 8639.69,
  },
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `code`                                                                                                                                                                               | *"cannot-transfer-in-until"*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
| `details`                                                                                                                                                                            | [models.GetOrder1DomainsRegistrarResponse200ApplicationJSONResponseBodyDomains2Details](../models/getorder1domainsregistrarresponse200applicationjsonresponsebodydomains2details.md) | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |
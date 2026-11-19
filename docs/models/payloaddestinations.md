# PayloadDestinations

## Example Usage

```typescript
import { PayloadDestinations } from "@vercel/sdk/models/payloadoutcome.js";

let value: PayloadDestinations = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `email`                                                        | *true*                                                         | :heavy_minus_sign:                                             | N/A                                                            |
| `inApp`                                                        | *true*                                                         | :heavy_minus_sign:                                             | N/A                                                            |
| `push`                                                         | *true*                                                         | :heavy_minus_sign:                                             | N/A                                                            |
| `slack`                                                        | [models.PayloadSlack](../models/payloadslack.md)[]             | :heavy_minus_sign:                                             | N/A                                                            |
| `unavailable`                                                  | [models.PayloadUnavailable](../models/payloadunavailable.md)[] | :heavy_minus_sign:                                             | N/A                                                            |
| `webhooks`                                                     | [models.PayloadWebhooks](../models/payloadwebhooks.md)[]       | :heavy_minus_sign:                                             | N/A                                                            |
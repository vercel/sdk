# ThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtySix } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: ThirtySix = {
  change: "set",
  scopeType: "project",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `budget`                                                             | [models.UserEventPayloadBudget](../models/usereventpayloadbudget.md) | :heavy_minus_sign:                                                   | `api-key` defaults may cover only some key spend attributions.       |
| `change`                                                             | [models.UserEventPayloadChange](../models/usereventpayloadchange.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `justification`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `previousBudget`                                                     | [models.PayloadPreviousBudget](../models/payloadpreviousbudget.md)   | :heavy_minus_sign:                                                   | `api-key` defaults may cover only some key spend attributions.       |
| `scopeType`                                                          | [models.PayloadScopeType](../models/payloadscopetype.md)             | :heavy_check_mark:                                                   | N/A                                                                  |
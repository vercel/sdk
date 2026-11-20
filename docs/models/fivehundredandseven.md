# FiveHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndSeven } from "@vercel/sdk/models/fourhundredandthirtyfive.js";

let value: FiveHundredAndSeven = {
  decision: {
    authoritative: true,
    basis: "none",
    emailDomain: "<value>",
    emailVerified: false,
    hostedDomainMatch: true,
    mxOutcome: "not-checked",
  },
  outcome: "linking-required",
  provider: "google",
  providerSubjectId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `decision`                                                                     | [models.PayloadDecision](../models/payloaddecision.md)                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `outcome`                                                                      | [models.PayloadOutcome](../models/payloadoutcome.md)                           | :heavy_check_mark:                                                             | N/A                                                                            |
| `provider`                                                                     | [models.UserEventPayload507Provider](../models/usereventpayload507provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `providerSubjectId`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
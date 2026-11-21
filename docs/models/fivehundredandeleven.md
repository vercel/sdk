# FiveHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndEleven } from "@vercel/sdk/models/fourhundredandthirtynine.js";

let value: FiveHundredAndEleven = {
  decision: {
    authoritative: true,
    basis: "none",
    emailDomain: "<value>",
    emailVerified: true,
    hostedDomainMatch: true,
    mxOutcome: "lookup-error",
  },
  outcome: "account-matched",
  provider: "google",
  providerSubjectId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `decision`                                                                     | [models.PayloadDecision](../models/payloaddecision.md)                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `outcome`                                                                      | [models.PayloadOutcome](../models/payloadoutcome.md)                           | :heavy_check_mark:                                                             | N/A                                                                            |
| `provider`                                                                     | [models.UserEventPayload511Provider](../models/usereventpayload511provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `providerSubjectId`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
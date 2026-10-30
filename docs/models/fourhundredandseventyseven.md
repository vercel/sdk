# FourHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventySeven } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: FourHundredAndSeventySeven = {
  decision: {
    authoritative: true,
    basis: "none",
    emailDomain: "<value>",
    emailVerified: false,
    hostedDomainMatch: false,
    mxOutcome: "google",
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
| `provider`                                                                     | [models.UserEventPayload477Provider](../models/usereventpayload477provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `providerSubjectId`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
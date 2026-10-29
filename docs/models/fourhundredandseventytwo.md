# FourHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyTwo } from "@vercel/sdk/models/usereventpayload453actortype.js";

let value: FourHundredAndSeventyTwo = {
  decision: {
    authoritative: false,
    basis: "gmail",
    emailDomain: "<value>",
    emailVerified: false,
    hostedDomainMatch: false,
    mxOutcome: "not-checked",
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
| `provider`                                                                     | [models.UserEventPayload472Provider](../models/usereventpayload472provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `providerSubjectId`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
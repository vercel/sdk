# FourHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNine } from "@vercel/sdk/models/threehundredandninetysix.js";

let value: FourHundredAndNine = {
  provider: "google",
  providerSubjectId: "<id>",
  outcome: "account-matched",
  decision: {
    authoritative: false,
    basis: "gmail",
    emailDomain: "<value>",
    emailVerified: true,
    hostedDomainMatch: false,
    mxOutcome: "lookup-error",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `provider`                                                                     | [models.UserEventPayload409Provider](../models/usereventpayload409provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `providerSubjectId`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `outcome`                                                                      | [models.PayloadOutcome](../models/payloadoutcome.md)                           | :heavy_check_mark:                                                             | N/A                                                                            |
| `decision`                                                                     | [models.PayloadDecision](../models/payloaddecision.md)                         | :heavy_check_mark:                                                             | N/A                                                                            |
# FourHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixteen } from "@vercel/sdk/models/fourhundredandthree.js";

let value: FourHundredAndSixteen = {
  provider: "google",
  providerSubjectId: "<id>",
  outcome: "linking-required",
  decision: {
    authoritative: true,
    basis: "gmail",
    emailDomain: "<value>",
    emailVerified: false,
    hostedDomainMatch: false,
    mxOutcome: "lookup-error",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `provider`                                                                     | [models.UserEventPayload416Provider](../models/usereventpayload416provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `providerSubjectId`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `outcome`                                                                      | [models.PayloadOutcome](../models/payloadoutcome.md)                           | :heavy_check_mark:                                                             | N/A                                                                            |
| `decision`                                                                     | [models.PayloadDecision](../models/payloaddecision.md)                         | :heavy_check_mark:                                                             | N/A                                                                            |
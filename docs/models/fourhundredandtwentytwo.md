# FourHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyTwo } from "@vercel/sdk/models/fourhundredandnine.js";

let value: FourHundredAndTwentyTwo = {
  provider: "google",
  providerSubjectId: "<id>",
  outcome: "account-matched",
  decision: {
    authoritative: true,
    basis: "workspace-mx",
    emailDomain: "<value>",
    emailVerified: true,
    hostedDomainMatch: true,
    mxOutcome: "lookup-error",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `provider`                                                                     | [models.UserEventPayload422Provider](../models/usereventpayload422provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `providerSubjectId`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `outcome`                                                                      | [models.PayloadOutcome](../models/payloadoutcome.md)                           | :heavy_check_mark:                                                             | N/A                                                                            |
| `decision`                                                                     | [models.PayloadDecision](../models/payloaddecision.md)                         | :heavy_check_mark:                                                             | N/A                                                                            |
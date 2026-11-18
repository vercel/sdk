# FiveHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFive } from "@vercel/sdk/models/usereventpayload499next.js";

let value: FiveHundredAndFive = {
  decision: {
    authoritative: false,
    basis: "workspace-mx",
    emailDomain: "<value>",
    emailVerified: false,
    hostedDomainMatch: true,
    mxOutcome: "non-google",
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
| `provider`                                                                     | [models.UserEventPayload505Provider](../models/usereventpayload505provider.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `providerSubjectId`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
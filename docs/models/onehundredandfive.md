# OneHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFive } from "@vercel/sdk/models/fiftytwo.js";

let value: OneHundredAndFive = {
  oldSsoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  scope: "team",
  ssoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `oldSsoProtection`                                                                 | [models.OldSsoProtection](../models/oldssoprotection.md)                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `scope`                                                                            | [models.UserEventPayloadScope](../models/usereventpayloadscope.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `ssoProtection`                                                                    | [models.UserEventPayloadSsoProtection](../models/usereventpayloadssoprotection.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
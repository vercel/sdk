# OneHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFour } from "@vercel/sdk/models/fiftyfour.js";

let value: OneHundredAndFour = {
  oldPasswordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  passwordProtection: {
    deploymentType: "all_except_custom_domains",
  },
  scope: "team",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `oldPasswordProtection`                                                                      | [models.OldPasswordProtection](../models/oldpasswordprotection.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `passwordChanged`                                                                            | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `passwordProtection`                                                                         | [models.UserEventPayloadPasswordProtection](../models/usereventpayloadpasswordprotection.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `scope`                                                                                      | [models.PayloadScope](../models/payloadscope.md)                                             | :heavy_check_mark:                                                                           | N/A                                                                                          |
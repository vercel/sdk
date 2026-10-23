# OneHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyFour } from "@vercel/sdk/models/usereventjobpayload124nsnbsideeffect.js";

let value: OneHundredAndSeventyFour = {
  key: "<key>",
  organizationId: "<id>",
  provider: "<value>",
  repository: "<value>",
  visibility: "config",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `changedFields`                                            | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `key`                                                      | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `organizationId`                                           | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `provider`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `repository`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `visibility`                                               | [models.PayloadVisibility](../models/payloadvisibility.md) | :heavy_check_mark:                                         | N/A                                                        |
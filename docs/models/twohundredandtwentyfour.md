# TwoHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyFour } from "@vercel/sdk/models/usereventpayloadlasteditedbyprincipal.js";

let value: TwoHundredAndTwentyFour = {
  accessTokenRotation: false,
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `accessTokenRotation`     | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `integrationId`           | *string*                  | :heavy_check_mark:        | N/A                       |
| `integrationName`         | *string*                  | :heavy_check_mark:        | N/A                       |
| `integrationSlug`         | *string*                  | :heavy_check_mark:        | N/A                       |
| `permanentTokensExpireAt` | *number*                  | :heavy_minus_sign:        | N/A                       |
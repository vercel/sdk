# ThreeHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyOne } from "@vercel/sdk/models/usereventpayload351geolocationnames.js";

let value: ThreeHundredAndNinetyOne = {
  requestedTeamName: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `bitbucketUsername`                                | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `githubUsername`                                   | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `gitlabUsername`                                   | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `gitUsername`                                      | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `requestedTeamName`                                | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `requestedTeamSlug`                                | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `requestedUserName`                                | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `source`                                           | [models.PayloadSource](../models/payloadsource.md) | :heavy_minus_sign:                                 | N/A                                                |
# ThreeHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyTwo } from "@vercel/sdk/models/usereventpayload338budget.js";

let value: ThreeHundredAndSeventyTwo = {
  requestedTeamName: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `requestedTeamName`                                | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `requestedTeamSlug`                                | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `requestedUserName`                                | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `gitUsername`                                      | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `githubUsername`                                   | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `gitlabUsername`                                   | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `bitbucketUsername`                                | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `source`                                           | [models.PayloadSource](../models/payloadsource.md) | :heavy_minus_sign:                                 | N/A                                                |
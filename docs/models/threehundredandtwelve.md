# ThreeHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwelve } from "@vercel/sdk/models/threehundredandfour.js";

let value: ThreeHundredAndTwelve = {
  requestedTeamName: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `requestedTeamName`                  | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `requestedTeamSlug`                  | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `requestedUserName`                  | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `gitUsername`                        | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `githubUsername`                     | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `gitlabUsername`                     | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `bitbucketUsername`                  | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `source`                             | [models.Source](../models/source.md) | :heavy_minus_sign:                   | N/A                                  |
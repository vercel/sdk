# ThreeHundredAndNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNine } from "@vercel/sdk/models/threehundredandone.js";

let value: ThreeHundredAndNine = {
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
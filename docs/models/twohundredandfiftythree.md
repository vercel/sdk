# TwoHundredAndFiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyThree } from "@vercel/sdk/models/twohundredandtwentyfive.js";

let value: TwoHundredAndFiftyThree = {
  requestedTeamName: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `requestedTeamName` | *string*            | :heavy_check_mark:  | N/A                 |
| `requestedUserName` | *string*            | :heavy_minus_sign:  | N/A                 |
| `gitUsername`       | *string*            | :heavy_minus_sign:  | N/A                 |
| `githubUsername`    | *string*            | :heavy_minus_sign:  | N/A                 |
| `gitlabUsername`    | *string*            | :heavy_minus_sign:  | N/A                 |
| `bitbucketUsername` | *string*            | :heavy_minus_sign:  | N/A                 |
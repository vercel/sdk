# TwoHundredAndFiftyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyTwo } from "@vercel/sdk/models/twohundredandtwentyfour.js";

let value: TwoHundredAndFiftyTwo = {
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
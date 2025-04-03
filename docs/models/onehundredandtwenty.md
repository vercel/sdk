# OneHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwenty } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwenty = {
  teamName: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `teamName`          | *string*            | :heavy_check_mark:  | N/A                 |
| `username`          | *string*            | :heavy_minus_sign:  | N/A                 |
| `gitUsername`       | *string*            | :heavy_minus_sign:  | N/A                 |
| `githubUsername`    | *string*            | :heavy_minus_sign:  | N/A                 |
| `gitlabUsername`    | *string*            | :heavy_minus_sign:  | N/A                 |
| `bitbucketUsername` | *string*            | :heavy_minus_sign:  | N/A                 |
| `updatedUid`        | *string*            | :heavy_minus_sign:  | N/A                 |
| `teamId`            | *string*            | :heavy_minus_sign:  | N/A                 |
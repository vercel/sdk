# OneHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwentySeven = {
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
# UserEventJobPayload1378GitComments

Since June 2023 Determines if comments should be posted to the git host. Replaces `github.silent` in the vercel.json.

## Example Usage

```typescript
import { UserEventJobPayload1378GitComments } from "@vercel/sdk/models/usereventjobpayload137gitcomments.js";

let value: UserEventJobPayload1378GitComments = {
  onCommit: false,
  onPullRequest: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `onCommit`         | *boolean*          | :heavy_check_mark: | N/A                |
| `onPullRequest`    | *boolean*          | :heavy_check_mark: | N/A                |
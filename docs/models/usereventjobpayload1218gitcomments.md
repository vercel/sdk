# UserEventJobPayload1218GitComments

Since June 2023 Determines if comments should be posted to the git host. Replaces `github.silent` in the vercel.json.

## Example Usage

```typescript
import { UserEventJobPayload1218GitComments } from "@vercel/sdk/models/job8.js";

let value: UserEventJobPayload1218GitComments = {
  onCommit: true,
  onPullRequest: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `onCommit`         | *boolean*          | :heavy_check_mark: | N/A                |
| `onPullRequest`    | *boolean*          | :heavy_check_mark: | N/A                |
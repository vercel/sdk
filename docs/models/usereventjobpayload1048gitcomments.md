# UserEventJobPayload1048GitComments

Since June 2023 Determines if comments should be posted to the git host. Replaces `github.silent` in the vercel.json.

## Example Usage

```typescript
import { UserEventJobPayload1048GitComments } from "@vercel/sdk/models/onehundredandone.js";

let value: UserEventJobPayload1048GitComments = {
  onPullRequest: true,
  onCommit: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `onPullRequest`    | *boolean*          | :heavy_check_mark: | N/A                |
| `onCommit`         | *boolean*          | :heavy_check_mark: | N/A                |
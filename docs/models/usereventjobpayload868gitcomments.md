# UserEventJobPayload868GitComments

Since June 2023 Determines if comments should be posted to the git host. Replaces `github.silent` in the vercel.json.

## Example Usage

```typescript
import { UserEventJobPayload868GitComments } from "@vercel/sdk/models/fiftysix.js";

let value: UserEventJobPayload868GitComments = {
  onPullRequest: false,
  onCommit: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `onPullRequest`    | *boolean*          | :heavy_check_mark: | N/A                |
| `onCommit`         | *boolean*          | :heavy_check_mark: | N/A                |
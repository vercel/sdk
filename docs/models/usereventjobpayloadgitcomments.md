# UserEventJobPayloadGitComments

Since June 2023 Determines if comments should be posted to the git host. Replaces `github.silent` in the vercel.json.

## Example Usage

```typescript
import { UserEventJobPayloadGitComments } from "@vercel/sdk/models/payloadprojectids.js";

let value: UserEventJobPayloadGitComments = {
  onPullRequest: false,
  onCommit: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `onPullRequest`    | *boolean*          | :heavy_check_mark: | N/A                |
| `onCommit`         | *boolean*          | :heavy_check_mark: | N/A                |
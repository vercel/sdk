# UserEventJobPayload969GitComments

Since June 2023 Determines if comments should be posted to the git host. Replaces `github.silent` in the vercel.json.

## Example Usage

```typescript
import { UserEventJobPayload969GitComments } from "@vercel/sdk/models/usereventjobpayload968provider.js";

let value: UserEventJobPayload969GitComments = {
  onPullRequest: true,
  onCommit: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `onPullRequest`    | *boolean*          | :heavy_check_mark: | N/A                |
| `onCommit`         | *boolean*          | :heavy_check_mark: | N/A                |
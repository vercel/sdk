# UserEventJobPayload1209GitComments

Since June 2023 Determines if comments should be posted to the git host. Replaces `github.silent` in the vercel.json.

## Example Usage

```typescript
import { UserEventJobPayload1209GitComments } from "@vercel/sdk/models/usereventjobcommitverification.js";

let value: UserEventJobPayload1209GitComments = {
  onCommit: true,
  onPullRequest: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `onCommit`         | *boolean*          | :heavy_check_mark: | N/A                |
| `onPullRequest`    | *boolean*          | :heavy_check_mark: | N/A                |
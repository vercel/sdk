# JobGitComments

## Example Usage

```typescript
import { JobGitComments } from "@vercel/sdk/models/commitverification.js";

let value: JobGitComments = {
  onCommit: true,
  onPullRequest: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `onCommit`         | *boolean*          | :heavy_check_mark: | N/A                |
| `onPullRequest`    | *boolean*          | :heavy_check_mark: | N/A                |
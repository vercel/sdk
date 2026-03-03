# UserEventJobPayload269HeadInfo

Information about the head commit/branch for a GitHub repository

## Example Usage

```typescript
import { UserEventJobPayload269HeadInfo } from "@vercel/sdk/models/userevent.js";

let value: UserEventJobPayload269HeadInfo = {
  org: "<value>",
  ref: "<value>",
  repo: "<value>",
  repoId: 6627.36,
  sha: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `org`              | *string*           | :heavy_check_mark: | N/A                |
| `ref`              | *string*           | :heavy_check_mark: | N/A                |
| `repo`             | *string*           | :heavy_check_mark: | N/A                |
| `repoId`           | *number*           | :heavy_check_mark: | N/A                |
| `sha`              | *string*           | :heavy_check_mark: | N/A                |
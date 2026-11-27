# UserEventJobPayload140HeadInfo

Information about the head commit/branch for a GitHub repository

## Example Usage

```typescript
import { UserEventJobPayload140HeadInfo } from "@vercel/sdk/models/usereventjobpayload1405provider.js";

let value: UserEventJobPayload140HeadInfo = {
  org: "<value>",
  ref: "<value>",
  repo: "<value>",
  repoId: 9238.32,
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
# UserEventJobPayload989HeadInfo

Cursor Origin

## Example Usage

```typescript
import { UserEventJobPayload989HeadInfo } from "@vercel/sdk/models/sixty.js";

let value: UserEventJobPayload989HeadInfo = {
  owner: "<value>",
  ownerId: "<id>",
  ref: "<value>",
  repo: "<value>",
  repoId: "<id>",
  sha: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `owner`                              | *string*                             | :heavy_check_mark:                   | Owner (namespace) slug, e.g. `acme`. |
| `ownerId`                            | *string*                             | :heavy_check_mark:                   | Origin namespace id (`ns_…`).        |
| `ref`                                | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `repo`                               | *string*                             | :heavy_check_mark:                   | Repository name, e.g. `api`.         |
| `repoId`                             | *string*                             | :heavy_check_mark:                   | Origin repository id.                |
| `sha`                                | *string*                             | :heavy_check_mark:                   | N/A                                  |
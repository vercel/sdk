# Nine

The payload of the event, if requested.

## Example Usage

```typescript
import { Nine } from "@vercel/sdk/models/userevent.js";

let value: Nine = {
  expiresAt: "1745142607704",
  grantId: "<id>",
  namedSandboxId: "<id>",
  permission: "<value>",
  projectId: "<id>",
  repositoryId: "<id>",
  sandboxId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `expiresAt`        | *string*           | :heavy_check_mark: | N/A                |
| `grantId`          | *string*           | :heavy_check_mark: | N/A                |
| `namedSandboxId`   | *string*           | :heavy_check_mark: | N/A                |
| `permission`       | *string*           | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `repositoryId`     | *string*           | :heavy_check_mark: | N/A                |
| `sandboxId`        | *string*           | :heavy_check_mark: | N/A                |
# Roles1

When "Directory Sync" is configured, this object contains a mapping of which Directory Group (by ID) should be assigned to which Vercel Team roles and permissions, or an access group. Bare team roles are deprecated in favor of DirectorySyncRolesMapping.

## Example Usage

```typescript
import { Roles1 } from "@vercel/sdk/models/team.js";

let value: Roles1 = {
  accessGroupId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `accessGroupId`    | *string*           | :heavy_check_mark: | N/A                |
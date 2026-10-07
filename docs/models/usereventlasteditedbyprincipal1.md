# UserEventLastEditedByPrincipal1

The principal that last edited this env var, when the editor id resolves to a known user or app. Lets clients render the right avatar instead of assuming every editor is a user.

## Example Usage

```typescript
import { UserEventLastEditedByPrincipal1 } from "@vercel/sdk/models/lasteditedbyprincipal2.js";

let value: UserEventLastEditedByPrincipal1 = {
  id: "<id>",
  type: "user",
  username: "Allison4",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `avatar`           | *string*           | :heavy_minus_sign: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |
| `type`             | *"user"*           | :heavy_check_mark: | N/A                |
| `username`         | *string*           | :heavy_check_mark: | N/A                |